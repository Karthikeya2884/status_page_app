from flask import Flask, jsonify

app = Flask(__name__)

# Sample status data
STATUS_DATA = {
    "service_1": {"status": "operational", "details": "No issues detected."},
    "service_2": {"status": "degraded", "details": "High latency observed."},
    "service_3": {"status": "down", "details": "Service is temporarily unavailable."},
}


@app.route('/status', methods=['GET'])
def get_status():
    """
    Endpoint to get the status of all services
    """
    return jsonify({"status": "ok", "services": STATUS_DATA})


@app.route('/status/<service_name>', methods=['GET'])
def get_service_status(service_name):
    """
    Endpoint to get the status of a specific service
    """
    if service_name in STATUS_DATA:
        return jsonify({service_name: STATUS_DATA[service_name]})
    else:
        return jsonify({"error": "Service not found"}), 404


if __name__ == '__main__':
    # Run the Flask app
    app.run(host='0.0.0.0', port=5000)