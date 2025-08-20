# JB SQUARE - v0.2.2

## Overview

This repository contains the source code for the JB SQUARE Prototype, a web platform designed to serve as a central hub for industry and research professionals. The project is built using a modern technology stack, featuring a React frontend and a Python FastAPI backend, structured within a monorepo.

This document provides essential information for developers to set up and run the project in a local development environment.

## Development Environment Setup

This project utilizes **Mock Service Worker (MSW)** to simulate backend API responses, enabling robust, independent frontend development.

### Prerequisites

-   **Node.js**: Version 18.x or higher
-   **npm**: Version 9.x or higher (or a compatible package manager like yarn or pnpm)
-   **Python**: Version 3.9 or higher (required only for backend development)

### Installation

Clone the repository and install the required Node.js dependencies from the root directory:

```bash
git clone https://github.com/your-repo/jb-square-prototype.git
cd jb-square-prototype
npm install
```

### Running the Application

For most frontend development tasks, running the UI with the mock API is sufficient and recommended.

#### Option 1: Frontend with Mock API (Recommended)

This method allows you to work on the UI without running the Python backend.

1.  **Start the React Development Server:**
    ```bash
    npm start
    ```
2.  **Access the Application:**
    Open your browser and navigate to `http://localhost:3000`. The application will be running with mock data provided by MSW.

#### Option 2: Full-Stack Development (Frontend + Backend)

Use this method when you need to make changes to both the frontend and the backend API.

1.  **Install Backend Dependencies:**
    ```bash
    pip install -r backend/requirements.txt
    ```
2.  **Run the Backend Server:**
    In a new terminal, start the FastAPI server:
    ```bash
    uvicorn backend.main:app --reload --port 8000
    ```
    The API will be available at `http://localhost:8000`, with interactive documentation at `http://localhost:8000/docs`.

3.  **Disable the Mock Service Worker:**
    To allow the frontend to communicate with the live backend, you must disable the mock worker. Open `src/index.tsx` and comment out the `worker.start()` line:
    ```typescript
    // import { worker } from './mocks/browser'
    // ...
    // worker.start()
    ```

4.  **Start the Frontend Server:**
    In another terminal, run the React application:
    ```bash
    npm start
    ```
    The application at `http://localhost:3000` will now make live requests to the backend server at `http://localhost:8000`.
