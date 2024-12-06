from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from the React frontend

@app.route('/api/greet', methods=['GET'])
def greet():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    return jsonify({"received": data}), 200

if __name__ == '__main__':
    app.run(debug=True)
