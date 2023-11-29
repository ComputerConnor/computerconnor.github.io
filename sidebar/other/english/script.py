# Install Flask using: pip install Flask
from flask import Flask, render_template, request, redirect, url_for
import random

app = Flask(__name__)

participants = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']

    # Add participant to the list
    participants.append({'name': name, 'email': email})

    return redirect(url_for('thank_you'))

@app.route('/thank_you')
def thank_you():
    return render_template('thank_you.html')

@app.route('/raffle')
def raffle():
    # Choose a random winner from participants
    winner = random.choice(participants) if participants else None

    return render_template('raffle.html', winner=winner)

if __name__ == '__main__':
    app.run(debug=True)
