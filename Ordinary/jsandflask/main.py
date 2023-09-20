from flask import Flask, request, render_template, redirect, url_for

import os
# Get the absolute path to the directory where your Python script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_url_path='/static')

# no need for a real database just using csv file
csv_file_path = os.path.join(script_dir, 'data.csv')

FILENAME = csv_file_path 





@app.route("/", methods=['GET', 'POST'])
def index(): 
    return render_template('index.html')



