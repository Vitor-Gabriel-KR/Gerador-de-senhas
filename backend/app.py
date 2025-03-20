from flask import Flask, jsonify, request
from flask_cors import CORS
import random
import string

app = Flask(__name__)
CORS(app)

def generate_password(length, uppercase, lowercase, numbers, symbols):
    char_pool = ""

    if uppercase:
        char_pool += string.ascii_uppercase
    if lowercase:
        char_pool += string.ascii_lowercase
    if numbers:
        char_pool += string.digits
    if symbols:
        char_pool += string.punctuation

    if not char_pool:
        return "", "No valid character sets selected"

    password = ''.join(random.choice(char_pool) for _ in range(length))

    strength = "Fraca"
    if length >= 12 and (uppercase or lowercase) and numbers and symbols:
        strength = "Forte"
    elif length >= 8:
        strength = "Mediana"

    return password, strength

@app.route('/')
def generate_password_route():
    try:
        length = int(request.args.get('length', 12))
        uppercase = request.args.get('uppercase', 'true') == 'true'
        lowercase = request.args.get('lowercase', 'true') == 'true'
        numbers = request.args.get('numbers', 'true') == 'true'
        symbols = request.args.get('symbols', 'true') == 'true'

        password, strength = generate_password(length, uppercase, lowercase, numbers, symbols)

        return jsonify({"password": password, "strength": strength})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
