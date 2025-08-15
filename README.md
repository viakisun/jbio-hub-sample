# JBio Hub - Monorepo (React Frontend + FastAPI Backend)

This repository contains the JBio Hub platform, structured as a monorepo. It includes the React frontend and a Python-based backend powered by FastAPI.

## Project Structure

-   `package.json`: The root package file for managing the frontend workspace.
-   `src/`, `public/`: The React frontend application.
-   `backend/`: The Python FastAPI backend.
    -   `main.py`: The main entry point for the FastAPI application.
    -   `requirements.txt`: Python dependencies.
    -   `routers/`: Contains the API routers for each domain (e.g., announcements, companies).
    -   `models/`: Contains the Pydantic data models.
    -   `db/`: Contains the mock database.

## Getting Started

### Prerequisites

-   Node.js (v16 or higher) & npm (for the frontend)
-   Python (v3.8 or higher) & pip

### Installation

1.  **Frontend:**
    From the root directory, install the Node.js dependencies for the React app:
    ```bash
    npm install
    ```

2.  **Backend:**
    Install the required Python packages:
    ```bash
    pip install -r backend/requirements.txt
    ```

### Running the Application

You will need to run the frontend and backend in separate terminal sessions.

1.  **Run the Backend:**
    From the root directory, start the FastAPI server using uvicorn:
    ```bash
    uvicorn backend.main:app --reload --port 8000
    ```
    The backend API will be running at `http://localhost:8000`. You can access the interactive API documentation at `http://localhost:8000/docs`.

2.  **Run the Frontend:**
    In a new terminal, start the React development server from the root directory:
    ```bash
    npm start
    ```
    The frontend will typically run on `http://localhost:3000`.
