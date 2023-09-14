from flask import Flask, request, render_template, redirect, url_for
import csv

import os

# Get the absolute path to the directory where your Python script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the absolute path to data.csv
csv_file_path = os.path.join(script_dir, 'data.csv')

FILENAME = csv_file_path


app = Flask(__name__, static_url_path='/static')


class Person:
    def __init__(self, name):
        self.name = name
        self.new = True
        self.club = None
    def add_club(self, club): 
        self.club = club
        self.new = False
    
    


data = {}


def save_data_to_csv():
    with open(FILENAME, 'w', newline='') as file: 
        field = ['name', 'club']
        writer = csv.DictWriter(file, fieldnames=field)
        writer.writeheader()
        for name, person in data.items(): 
            writer.writerow({'name': name, 'club': person.club})

        

def load_data_from_csv(): 
    try: 
        with open(FILENAME, newline='') as file: 
            reader = csv.DictReader(file)
            for row in reader: 
                name = row['name']
                club = row['club']
                data[name] = Person(name)
                data[name].add_club(club)
    except: 
        pass

load_data_from_csv()
        


@app.route('/', methods=['GET', 'POST'])
def index():
    save_data_to_csv()

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
    save_data_to_csv()
    rename = name.title()
    if request.method == 'POST':
        club = request.form['club']
        data[name].add_club(club)
        return redirect(url_for('main', name=name.strip()))

    return render_template('next.html', name = rename.strip())

@app.route('/change/<name>', methods=['GET', 'POST'])
def change(name): 
    save_data_to_csv()
    club = data[name].club
    rename = name.title()
    if request.method == 'POST': 
        club = request.form['club']
        data[name].add_club(club)
        return redirect(url_for('main', name=name.strip()))

    
    return render_template('change.html', name= rename.strip(), club = club.strip())

@app.route('/main/<name>', methods=['GET', 'POST'])
def main(name):
    save_data_to_csv()
    club = data[name].club.strip()
    rename = name.title().strip()
    


    return render_template('main.html', name = rename, club = club)



if __name__ == '__main__':
    app.run(debug=True)