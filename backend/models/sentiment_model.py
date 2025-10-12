from textblob import TextBlob

def analyze_sentiment(text):
    analysis = TextBlob(text)
    polarity = analysis.sentiment.polarity
    if polarity > 0.1:
        mood = "Positive"
    elif polarity < -0.1:
        mood = "Stressed"
    else:
        mood = "Neutral"
    return {"polarity": polarity, "mood": mood}
