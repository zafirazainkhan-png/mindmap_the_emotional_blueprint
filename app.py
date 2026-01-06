from flask import Flask, render_template

app = Flask(__name__)

# ========================= MAIN PAGES =========================
@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/why-am-i-feeling")
def why_am_i_feeling():
    return render_template("why_am_i_feeling.html")

@app.route("/what-am-i-feeling")
def what_am_i_feeling():
    return render_template("what_am_i_feeling.html")

@app.route("/mood-messengers")
def mood_messengers():
    return render_template("mood_messengers.html")

@app.route("/managing-emotions")
def managing_emotions():
    return render_template("managing_your_emotions.html")

@app.route("/work-cited")
def work_cited():
    return render_template("Work_Cited.html")

# ========================= BRAIN REGIONS =========================
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

# ========================= EMOTION WHEEL PAGES =========================
@app.route("/fear")
def fear():
    return render_template("fear.html")

@app.route("/stress")
def stress():
    return render_template("stress.html")

@app.route("/anger")
def anger():
    return render_template("anger.html")

@app.route("/joy")
def joy():
    return render_template("joy.html")

@app.route("/love")
def love():
    return render_template("love.html")

@app.route("/sadness")
def sadness():
    return render_template("sadness.html")

@app.route("/guilt")
def guilt():
    return render_template("self-conscious.html")  # file: self-conscious.html

@app.route("/wonder")
def wonder():
    return render_template("curiosity.html")       # file: curiosity.html

if __name__ == "__main__":
    app.run(debug=True, port=5003)  # optional: specify port to avoid conflicts