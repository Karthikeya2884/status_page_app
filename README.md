# Status Page Project

This project is a simple status page built using Flask for both the backend and frontend. It allows users to view the operational status of various services.

## Features
- Backend API for fetching service statuses.
- Frontend for displaying statuses in a user-friendly format.
- Error handling for unavailable services.

## Project Structure
```
.
├── backend
│   ├── app.py        # Backend Flask API
├── frontend
│   ├── app.py        # Frontend Flask App
│   ├── templates     # HTML templates for frontend
│       ├── index.html
│       ├── service.html
│       ├── error.html
├── requirements.txt   # Python dependencies
```

## Setup Instructions

### Prerequisites
- Python 3.8 or later
- `pip` (Python package installer)

### Install Dependencies
1. Navigate to the `backend` folder and install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
2. Navigate to the `frontend` folder and install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

### Run the Project
1. Start the **backend server**:
    ```bash
    python backend/app.py
    ```
2. Start the **frontend server**:
    ```bash
    python frontend/app.py
    ```

### Access the Application
- Open your browser and go to `http://localhost:8000`.

## API Endpoints
- **GET /api/status**: Returns the status of all services.
- **GET /api/status/<service_name>**: Returns the status of a specific service.

## Screenshots
### Homepage
![Homepage](docs/screenshots/homepage.png)

### Service Status
![Service Status](docs/screenshots/service_status.png)

## License
This project is licensed under the MIT License.
