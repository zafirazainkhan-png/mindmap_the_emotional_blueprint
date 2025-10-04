from flask import Flask, render_template

app = Flask(__name__)

# Homepage
@app.route("/")
def homepage():
    return render_template("homepage.html")

# Feeling-related pages
@app.route("/why_am_i_feeling")
def why_am_i_feeling():
    return render_template("why_am_i_feeling.html")

@app.route("/what_am_i_feeling")
def what_am_i_feeling():
    return render_template("what_am_i_feeling.html")

# Mood messenger page
@app.route("/mood_messengers")
def mood_messengers():
    return render_template("mood_messengers.html")

# Emotion management page
@app.route("/managing_emotions")
def managing_emotions():
    return render_template("managing_your_emotions.html")

# Brain region pages
@app.route("/amygdala")
def amygdala():
    return render_template("amygdala.html")

@app.route("/hippocampus")
def hippocampus():
    return render_template("hippocampus.html")

@app.route("/hypothalamus")
def hypothalamus():
    return render_template("hypothalamus.html")

@app.route("/thalamus")
def thalamus():
    return render_template("thalamus.html")

@app.route("/cingulate_gyrus")
def cingulate_gyrus():
    return render_template("cingulate_gyrus.html")

if __name__ == "__main__":
    app.run(debug=True, port=5003)
