# JBio Hub - Backend Monorepo

This repository contains the backend microservices for the JBio Hub platform. It is structured as a monorepo using npm workspaces, and it lives alongside the React frontend application.

## Project Structure

-   `package.json`: The root package file, configured for npm workspaces. Manages all services and shared dependencies.
-   `src/`, `public/`: The React frontend application.
-   `packages/`: Contains shared code used by multiple services.
    -   `common/`: A placeholder for common utilities.
-   `services/`: Contains all the individual microservices.
    -   `gateway-service/`: The single entry point (API Gateway) for the frontend.
    -   `announcement-service/`: Manages announcements.
    -   `company-service/`: Manages company and institution data.
    -   `infra-service/`: Manages infrastructure data for the map.
    -   `content-service/`: Manages news, notices, and tech achievements.
    -   `consultation-service/`: Manages consultation requests.
    -   `user-service/`: Manages user authentication and data.
    -   `admin-service/`: Manages administrative tasks.

## Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm (v7 or higher, for workspace support)

### Installation

1.  Clone the repository.
2.  Install all dependencies for the frontend and all backend services from the root directory:
    ```bash
    npm install
    ```

### Running the Services

#### Run All Backend Services

To run all backend microservices and the API gateway concurrently, use the following command from the root directory:

```bash
npm run dev
```

This will start all services on their respective ports. The API Gateway will be available at `http://localhost:3000`.

#### Run a Single Service

To run a specific microservice for development, you can use the npm workspace command. For example, to run only the `announcement-service`:

```bash
npm run dev -w @gonggo/announcement-service
```

#### Run the Frontend

To run the React frontend application, use the standard start script:

```bash
npm start
```

This will start the React development server, usually on `http://localhost:3001` (or the next available port if 3000 is taken by the gateway).

## API Endpoints

All backend APIs are accessed through the API Gateway at `http://localhost:3000/api`.

-   **Announcements**: `GET /api/announcements`, `GET /api/announcements/:id`
-   **Companies**: `GET /api/companies`, `GET /api/companies/:id`
-   **Infrastructure**: `GET /api/infra/map`
-   **Content**:
    -   `GET /api/news`, `GET /api/news/:id`
    -   `GET /api/techs`, `GET /api/techs/:id`
-   **Consultations**: `POST /api/consultations`
-   **Users**: `POST /api/auth/login`, `GET /api/me` (requires Bearer token)
-   **Admin**: `GET, POST, PUT, DELETE /api/admin/*` (requires `X-User-Role: admin` header)
