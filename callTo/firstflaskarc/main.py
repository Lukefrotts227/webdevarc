from flask import Flask, request, render_template, redirect, url_for
import csv


app = Flask(__name__)

class Person:
    def __init__(self, name):
        self.name = name
        self.new = True
    def add_club(self, club): 
        self.club = club
        self.new = False
    def write_to(self): 
        pass
    


data = {}


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST' and (not name in data):
        name = request.form['name']
        name = name.lower()
        data[name] = Person(name)
        return redirect(url_for('next', name=name))
    
    elif request.method == 'POST' and name in data: 
        return redirect(url_for('next', name=name)) 
    
    elif request.method == 'POST' and name in data and data[name].new == True: 
        pass

    return render_template('index.html')

@app.route('/next/<name>', methods=['GET', 'POST'])
def next(name): 
    rename = name.title()
    if request.method == 'POST':
        club = request.form['club']
        data[name].add_club(club)

    return render_template('next.html', name=rename)

@app.route('/main/<name>', methods=['GET', 'POST'])
def main(name):
    pass



if __name__ == '__main__':
    app.run(debug=True)