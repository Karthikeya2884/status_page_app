from flask import jsonify
from app import app

# Sample status data
STATUS_DATA = {
    "service_1": {"status": "operational", "details": "No issues detected."},
    "service_2": {"status": "degraded", "details": "High latency observed."},
    "service_3": {"status": "down", "details": "Service is temporarily unavailable."},
}

@app.route('/api/status', methods=['GET'])
def get_status():
    """
    API Endpoint to get the status of all services
    """
    return jsonify({"status": "ok", "services": STATUS_DATA})

@app.route('/api/status/<service_name>', methods=['GET'])
def get_service_status(service_name):
    """
    API Endpoint to get the status of a specific service
    """
    if service_name in STATUS_DATA:
        return jsonify({service_name: STATUS_DATA[service_name]})
    else:
        return jsonify({"error": "Service not found"}), 404