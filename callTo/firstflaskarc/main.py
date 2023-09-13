from flask import Flask, request, render_template, redirect, url_for
import csv


app = Flask(__name__)

class Person:
    def __init__(self, name):
        self.name = name
        self.new = False
    def write_to(self): 
        pass
    


data = {}


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['name']
        name = name.lower()
        data[name] = Person(name)

        return redirect(url_for('next', name=name))
    return render_template('index.html')

@app.route('/next/<name>', methods=['GET', 'POST'])
def next(name): 
    rename = name.title()
    return render_template('next.html', name=rename)


if __name__ == '__main__':
    app.run(debug=True)