from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/Why-am-I-feeling')
def why_am_i_feeling():
    return render_template('Why am I feeling?.html')

@app.route('/What-am-I-feeling')
def what_am_i_feeling():
    return render_template('What am I feeling?.html')

@app.route('/Mood-Messengers')
def mood_messengers():
    return render_template('Mood Messengers.html')

@app.route('/Managing-your-emotions')
def managing_emotions():
    return render_template('Managing your emotions.html')

if __name__ == '__main__':
    app.run(debug=True)
