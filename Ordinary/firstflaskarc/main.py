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
    
    


data = {}


@app.route('/', methods=['GET', 'POST'])
def index():

    if request.method == 'POST':
    
        name = request.form['name']
        name = name.lower()
        if name == 'admin': 
            return redirect(url_for('admin'))

        if not name in data:
            data[name] = Person(name.strip())
            return redirect(url_for('next', name=name.strip()))
    
        elif name in data: 
            return redirect(url_for('next', name=name.strip())) 
        
        elif name in data and data[name].new == True: 
            return redirect(url_for('main', name=name.strip()))

    return render_template('index.html')

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    return render_template('admin.html', elements=data) 

@app.route('/next/<name>', methods=['GET', 'POST'])
def next(name): 
    rename = name.title()
    if request.method == 'POST':
        club = request.form['club']
        data[name].add_club(club)
        print("here")
        return redirect(url_for('main', name=name.strip()))

    return render_template('next.html', name = rename.strip())

@app.route('/change/<name>', methods=['GET', 'POST'])
def change(name): 
    club = data[name].club
    rename = name.title()
    if request.method == 'POST': 
        club = request.form['club']
        data[name].add_club(club)
        return redirect(url_for('main', name=name.strip()))

    
    return render_template('change.html', name= rename.strip(), club = club.strip())

@app.route('/main/<name>', methods=['GET', 'POST'])
def main(name):
    club = data[name].club.strip()
    rename = name.title().strip()
    


    return render_template('main.html', name = rename, club = club)



if __name__ == '__main__':
    app.run(debug=True)