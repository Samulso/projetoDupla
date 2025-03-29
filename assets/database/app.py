from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    name = data['name']
    email = data['email']
    password = data['password']

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    try:
        cursor.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', (name, email, password))
        conn.commit()
        return jsonify({"message": "Usuário cadastrado com sucesso!"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"message": "E-mail já cadastrado!"}), 400
    finally: 
        conn.close()

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute('SELECT name FROM users WHERE email = ? AND password = ?', (email, password))
    user = cursor.fetchone()

    if user:
        return jsonify({"message": f"Bem-vindo, {user[0]}!"}), 200
    else:
        return jsonify({"message": "E-mail ou senha inválidos."}), 401
    
if __name__ == '__main__':
    app.run(debug=True)