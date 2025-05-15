from flask import render_template
from app import app
import requests

# Backend API base URL
BACKEND_API_URL = "http://localhost:5000/api"

@app.route('/')
def index():
    """
    Render the homepage with all services' statuses
    """
    try:
        response = requests.get(f"{BACKEND_API_URL}/status")
        if response.status_code == 200:
            services = response.json().get("services", {})
            return render_template("index.html", services=services)
        else:
            return render_template("error.html", error="Failed to fetch service statuses.")
    except Exception as e:
        return render_template("error.html", error=str(e))

@app.route('/service/<service_name>')
def service_status(service_name):
    """
    Render the page for a specific service's status
    """
    try:
        response = requests.get(f"{BACKEND_API_URL}/status/{service_name}")
        if response.status_code == 200:
            service = response.json().get(service_name, {})
            return render_template("service.html", service_name=service_name, service=service)
        else:
            return render_template("error.html", error="Service not found.")
    except Exception as e:
        return render_template("error.html", error=str(e))