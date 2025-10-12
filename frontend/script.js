async function submitMood() {
    const mood = document.getElementById('moodInput').value;
    
    // ⬇️ PASTE YOUR ACTUAL RENDER URL HERE ⬇️
    const RENDER_API_URL = 'https://edupulse-exclusive.onrender.com/analyze'; 
    
    const response = await fetch(RENDER_API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ mood: mood })
    });
    const data = await response.json();
    document.getElementById('result').innerText = `Mood: ${data.mood}, Polarity: ${data.polarity}`;
}