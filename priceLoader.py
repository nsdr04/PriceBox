from flask_cors import CORS
from flask import Flask, jsonify, request, render_template
from flask_restful import reqparse, Resource, Api
import numpy as np
import quandl as qd
import pandas as pd
qd.ApiConfig.api_key=""
app = Flask(__name__)
cors = CORS(app)
api = Api(app)

class receivePrice(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('ticker', type=str)
        parser.add_argument('dt', type=str)
        tick = [(parser.parse_args())]
        pr = qd.get_table('WIKI/PRICES', date=(tick[0]["dt"]), ticker=(tick[0]["ticker"]))
        if pr.empty:
            return jsonify('You got punked')
        return jsonify(float(pr.open))

api.add_resource(receivePrice,'/price')

if __name__ == '__main__':
    app.run(port=5000)
