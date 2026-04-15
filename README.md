# EduPulse Mood Tracker

EduPulse Mood Tracker is a full-stack web application designed to analyze a user's mood using sentiment analysis techniques. The system allows users to input their thoughts or feelings as text, processes it through a backend model, and returns a mood classification along with a polarity score in real time.

This project demonstrates the integration of frontend and backend systems using REST APIs, along with practical implementation of Natural Language Processing concepts.

---

## Key Features

* Real-time mood detection using sentiment analysis
* Fast API response using Flask backend
* Seamless frontend-backend integration
* Displays mood and polarity score instantly
* Modular and scalable project structure

---

## 🛠️ Tech Stack

### Backend

* Python
* Flask
* Flask-CORS

### Frontend

* HTML
* JavaScript (Fetch API)

### Sentiment Analysis

* TextBlob / Custom sentiment model

---

## System Workflow

1. User enters mood-related text in the web interface
2. Frontend captures input and sends a POST request
3. Flask API receives and processes the text
4. Sentiment model evaluates polarity and mood
5. JSON response is returned to frontend
6. Result is displayed dynamically to the user

---

## Project Structure

project/
│
├── backend/
│   ├── app.py
│   └── models/
│       └── sentiment_model.py
│
├── frontend/
│   ├── index.html
│   └── script.js
│
├── requirements.txt

---

## How to Run Locally

### Step 1: Clone Repository

git clone https://github.com/shouryazaryaz-design/EduPulse-Mood-Tracker-Project

### Step 2: Navigate to Project Folder

cd EduPulse-Mood-Tracker-Project

### Step 3: Install Dependencies

pip install -r requirements.txt

### Step 4: Run Backend Server

cd backend
python app.py

### Step 5: Launch Frontend

Open frontend/index.html in your browser

---

