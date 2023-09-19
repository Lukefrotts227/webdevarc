import Flask, request, render_template, redirect, url_for

import os
# Get the absolute path to the directory where your Python script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_url_path='/static')

