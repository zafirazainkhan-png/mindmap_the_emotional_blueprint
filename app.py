from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/brain')
def brain():
    return render_template('brain.html')

@app.route('/emotions')
def emotions():
    return render_template('emotions.html')

@app.route('/coping')
def coping():
    return render_template('coping.html')

if __name__ == '__main__':
    app.run(debug=True)
    
