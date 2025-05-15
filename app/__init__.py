from flask import Flask

# Initialize the Flask app
app = Flask(__name__)

# Import backend and frontend routes
from app import backend, frontend