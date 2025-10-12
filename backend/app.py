from flask import Flask, request, jsonify
from flask_cors import CORS
from models.sentiment_model import analyze_sentiment

app = Flask(__name__)
CORS(app) # Enable CORS for frontend communication

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    mood_text = data.get('mood', '')
    result = analyze_sentiment(mood_text)
    return jsonify(result)

# For local testing, run: python app.py
# For production (like Render), a WSGI server (Gunicorn) is used.
# We remove the app.run() block for deployment.
