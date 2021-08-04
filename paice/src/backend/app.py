from flask import Flask, jsonify, request
from flask_cors import CORS
import csv
import os

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return {"Response": "Response"}



@app.route('/statistik')
def statistik():
    with open(os.path.join(os.path.dirname(os.getcwd()), 'DataCollecting', 'data_covid.csv')) as file:
        reader = csv.reader(file)
        array = []
        for row in reader:
            array.append(row)
    return {"Response": array}


if __name__ == "__main__":
    app.run(debug=True)