# Status Page Project

This project is a simple status page built using Flask for both backend and frontend functionality. It allows users to view the operational status of various services.

## Features
- Backend API for fetching service statuses.
- Frontend for displaying statuses in a user-friendly format.
- Error handling for unavailable services.

## Project Structure
```
.
├── templates/
│   ├── index.html
│   ├── service.html
│   ├── error.html
├── backend.py
├── frontend.py
├── requirements.txt
├── render.yaml
├── README.md
```

## Setup Instructions

### Prerequisites
- Python 3.8 or later
- `pip` (Python package installer)

### Install Dependencies
1. Install dependencies using the following command:
    ```bash
    pip install -r requirements.txt
    ```

### Run the Application Locally
1. Start the Flask app:
    ```bash
    python -m app
   
   export PYTHONPATH=/home/user/project-root
   python -c "import app.frontend; print('Frontend module loaded successfully')"
     ```

3. Open your browser and go to `http://localhost:5000`.

### Deploy on Render
1. Commit your code to a GitHub repository.
2. Log in to [Render](https://render.com).
3. Create a new **Web Service** and connect your GitHub repository.
4. Render will automatically detect the `render.yaml` configuration and deploy the app.

## API Endpoints
- **GET /api/status**: Returns the status of all services.
- **GET /api/status/<service_name>**: Returns the status of a specific service.

## License
This project is licensed under the MIT License.
