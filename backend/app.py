from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo
import hashlib
from flask_cors import CORS
from dotenv import load_dotenv
import os

from enc_dec import encrypt_to_emojis, decrypt_to_text

load_dotenv()  # Load from .env file

app = Flask(__name__)
CORS(app)


# MongoDB config using env
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)

@app.route('/')
def index():
    return "Welcome to Emoji Encryption API"

# Encrypt
@app.route('/encrypt', methods=['POST'])
def encrypt():
    plain_text = request.form['plain_text']
    emojis_text = encrypt_to_emojis(plain_text)
    return emojis_text

# Decrypt
@app.route('/decrypt', methods=['POST'])
def decrypt():
    emojis_text = request.form['emojis_text']
    decrypted_text = decrypt_to_text(emojis_text)
    return decrypted_text

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    phone = data.get('phonenumber')
    password = hashlib.sha256(data.get('password').encode()).hexdigest()

    existing_user = mongo.db.users.find_one({'email': email})
    if existing_user:
        return jsonify({'message': 'Email already registered'}), 409

    mongo.db.users.insert_one({'email': email, 'phonenumber': phone, 'password': password})
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()
    email = data.get('email')
    password = hashlib.sha256(data.get('password').encode()).hexdigest()

    user = mongo.db.users.find_one({'email': email, 'password': password})
    if user:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid email or password'}), 401

if __name__ == "__main__":
    app.run(debug=True)
