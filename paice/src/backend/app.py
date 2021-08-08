from flask import Flask, jsonify, request
from flask_cors import CORS
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(os.getcwd()), "DataCollecting"))
import DataCovid
import DataRumahSakit

app = Flask(__name__)
CORS(app)

ProvinsiRS = ""
KotaRS = ""
@app.route('/')
def index():
    return {"Response": "Response"}


@app.route('/statistik')
def statistik():
    DataCovid.UpdateData()
    return {"Response": DataCovid.Data}


@app.route('/hospital', methods=['GET', 'POST'])
def hospital():
    global ProvinsiRS
    global KotaRS
    if request.method == 'GET':
        ProvinsiRS = ""
        return {"Response": DataRumahSakit.TampilkanProvinsi()}
    elif request.method == 'POST' and "Provinsi" in request.get_json():
        ProvinsiRS = DataRumahSakit.TampilkanProvinsi()[request.get_json()["Provinsi"]]
        return {"Response": DataRumahSakit.TampilkanKabKota(DataRumahSakit.TampilkanProvinsi()[request.get_json()["Provinsi"]])}
    elif request.method == 'POST' and "Kota" in request.get_json():
        KotaRS = DataRumahSakit.TampilkanKabKota(ProvinsiRS)[request.get_json()["Kota"]]
        DataRumahSakit.UpdateData(ProvinsiRS, KotaRS)
        return {"Response": DataRumahSakit.Data}


if __name__ == "__main__":
    app.run(debug=True)