from flask import Flask, jsonify, request
from flask_cors import CORS
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(os.getcwd()), "DataCollecting"))
import DataCovid
import DataRumahSakit
import DataOksigen

app = Flask(__name__)
CORS(app)

# ProvinsiRS = ""
# KotaRS = ""
@app.route('/')
def index():
    return {"Response": "Response"}


@app.route('/statistik')
def statistik():
    DataCovid.UpdateData()
    return {"Response": DataCovid.Data}


@app.route('/hospital', methods=['GET', 'POST'])
def hospital():
    ProvinsiRS = ""
    KotaRS = ""
    if request.method == 'GET':
        return {"Response": DataRumahSakit.TampilkanProvinsi()}
    elif request.method == 'POST' and "Kota" in request.get_json() and "Provinsi" in request.get_json():
        ProvinsiRS = request.get_json()["Provinsi"]
        KotaRS = request.get_json()["Kota"]
        DataRumahSakit.UpdateData(ProvinsiRS, KotaRS)
        return {"Response": DataRumahSakit.Data}
    elif request.method == 'POST' and "Provinsi" in request.get_json():
        ProvinsiRS = request.get_json()["Provinsi"]
        return {"Response": DataRumahSakit.TampilkanKabKota(request.get_json()["Provinsi"])}


@app.route('/oksigen', methods=['GET', 'POST'])
def oksigen():
    ProvinsiOks = ""
    KotaOks = ""
    if request.method == 'GET':
        return {"Response": DataOksigen.TampilkanProvinsi()}
    elif request.method == 'POST' and "Kota" in request.get_json() and "Provinsi" in request.get_json():
        ProvinsiOks = request.get_json()["Provinsi"]
        KotaOks = request.get_json()["Kota"]
        DataOksigen.UpdateData(ProvinsiOks, KotaOks)
        return {"Response": DataOksigen.Data}
    elif request.method == 'POST' and "Provinsi" in request.get_json():
        ProvinsiOks = request.get_json()["Provinsi"]
        return {"Response": DataOksigen.TampilkanKabKota(request.get_json()["Provinsi"])}


if __name__ == "__main__":
    app.run(debug=True)