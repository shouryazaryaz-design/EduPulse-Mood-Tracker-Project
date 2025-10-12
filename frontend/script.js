async function submitMood() {
    const mood = document.getElementById('moodInput').value;
    const response = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ mood: mood })
    });
    const data = await response.json();
    document.getElementById('result').innerText = `Mood: ${data.mood}, Polarity: ${data.polarity}`;
}
