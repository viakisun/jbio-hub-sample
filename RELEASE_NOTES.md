# Release v0.2.2: Technology & Patents Page Overhaul

## Overview

This release focuses on a complete overhaul of the "Technology & Patents" page, introducing critical features like pagination and advanced filtering. It also includes a series of major bug fixes that significantly improve the stability and reliability of the entire application, particularly regarding the development and deployment workflow.

---

### Key Features & Enhancements

#### ✨ Technology & Patents Page
*   **Pagination Implemented**: The technology list now correctly paginates, showing 20 items per page by default, with a fully functional pagination component at the bottom.
*   **Dependent Category Filters**: Implemented new, dependent filters for "대분류" (Main Category) and "소분류" (Sub-category). The sub-category options are now dynamically updated based on the selected main category, and the filter is disabled until a main category is chosen.
*   **Standardized Mock Data**: The mock data for all 100 technology items has been corrected and standardized to use a consistent category structure, ensuring the filters and table data are accurate.

#### 🛠️ Major Bug Fixes & Stability
*   **Server Routing (404 Errors)**: Fixed a critical bug where accessing frontend pages directly (e.g., `/tech/patents`) would result in a 404 error. The backend is now correctly configured to handle Single-Page Application (SPA) routing.
*   **Server Startup (RuntimeError)**: Resolved a `RuntimeError` that occurred on server startup if the frontend had not been built. The server now uses robust, absolute paths to locate frontend assets and will no longer crash if they are missing.
*   **Data Integrity**: Fixed a bug where the `subCategory` filter was not being passed to the API. Also corrected several self-inflicted errors during development where the mock data was truncated or corrupted.
*   **Backend Test Suite**: Added a new test suite for the backend API (`test_technology_api.py`) to verify the correctness of pagination, filtering, and data serialization. This will help prevent future regressions.

---

# Release v0.2.1: Company Information & Stability Update

## Overview

This release introduces the comprehensive "Company Information" feature, a major new section of the JB SQUARE platform. It provides a full-stack implementation allowing users to explore, search, and view detailed information about companies in the Jeonbuk Bio ecosystem.

This version also includes a significant number of stability improvements, bug fixes, and design tweaks that enhance the overall quality and robustness of the application.

---

### Key Features & Enhancements

#### ✨ New Feature: Company & Article Information
*   **Full-Stack Implementation**: Created a complete, end-to-end feature for company and article information.
*   **Backend API**:
    *   Developed new FastAPI endpoints for companies and articles.
    *   Supports full CRUD operations, pagination, filtering, sorting, comparison, and bookmarking.
    *   Added new Pydantic models and comprehensive mock data.
*   **Frontend Pages**:
    *   **Company Dashboard (`/company`)**: A new landing page displaying key statistics about registered companies.
    *   **Company List (`/companies`)**: A redesigned, full-featured page with advanced filters, sorting, and both card and table views.
    *   **Company Detail (`/companies/:id`)**: A detailed view for individual companies, showing products, achievements, patents, and contact information.
    *   **Article List & Detail (`/articles`, `/articles/:id`)**: New pages for browsing and reading articles and interviews related to the companies.
*   **Data-Driven UI**: Implemented a full suite of custom React hooks (`useCompanies`, `useArticles`, `useBookmarks`, etc.) to connect the new pages to the backend API.
*   **New UI Components**: Created new `CompanyCard` and `ArticleCard` components for a consistent and professional look.

#### 🎨 Design & UI/UX Improvements
*   **Companies Page Redesign**: Overhauled the `/companies` page for better visual consistency with the rest of the application.
*   **Polished Filter Bar**: Implemented a styled, user-friendly filter bar on the Companies page.
*   **Layout Adjustments**: Fine-tuned component spacing and layout on the Companies page based on user feedback to prevent overlapping elements.

#### 🛠️ Bug Fixes & Stability
*   **Frontend Build & Runtime Errors**:
    *   Fixed numerous TypeScript type errors.
    *   Resolved all React warnings related to invalid props being passed to DOM elements by converting them to transient props (`$prop`).
    *   Corrected broken navigation links in the main header.
*   **Backend Runtime Errors**:
    *   Fixed a server crash on startup caused by an incorrect Pydantic model definition.
    *   Resolved a `NameError` by correcting a missing import in the mock data file.
*   **Mock API (MSW) Fixes**:
    *   Added missing mock handlers for `/api/support-programs`, `/api/tech-summary/list`, and `/api/incubation-centers` to prevent frontend runtime errors in development.

---

# Release v0.2.0: Full-Stack API Implementation

## Overview

This major release transforms the JB SQUARE platform from a prototype with limited scope to a comprehensive, full-stack application with a nearly complete API backend and integrated frontend components. Based on a detailed OpenAPI specification, this version introduces a complete mock backend for all major domains and connects several key frontend pages to this new API, replacing previous mock data implementations.

The primary goal of this release is to establish the full data architecture of the application and provide a feature-rich, data-driven user experience for core functionalities.

---

### Key Features & Enhancements

#### Backend (FastAPI)
*   **Full API Implementation**: Implemented a complete mock backend for the API defined in the `openapi.yml` specification.
*   **Modular Routers**: Created new, modular routers for all major API domains: Support Programs, Incubation Centers, Technologies, Education, Mentors, and Search.
*   **Robust Data Modeling**: Developed Pydantic models for all API schemas, ensuring data validation and consistency.
*   **Auth & User Management**: Refactored the `auth` and `users` routers and implemented a full suite of endpoints for registration, login, password reset, and user profile management.
*   **Admin Functionality**: Added a comprehensive set of admin endpoints for user management and registration approval.
*   **Mock Data & SQL**: Provided mock data and sample SQL `CREATE TABLE` schemas for all new models.

#### Frontend (React)
*   **Live Data Integration**: Refactored several key pages to fetch data from the new live backend API, replacing all previous mock data.
    *   **Support Programs Page**: Now displays live data from `/api/support-programs`.
    *   **Incubation Centers Page**: Now displays live data from `/api/incubation-centers`.
    *   **Technologies & Patents Page**: Now displays live data from `/api/tech-summary/list`.
*   **Consistent Data Fetching**: Established a unified data-fetching pattern by creating and using custom React hooks (`useSupportPrograms`, `useIncubationCenters`, etc.).
*   **Component Refactoring**: Updated and refactored numerous UI components (`AnnouncementListItem`, `TenantCard`, etc.) to align with the new, consistent data models provided by the backend API.
*   **Build Error Resolution**: Systematically identified and fixed numerous TypeScript and JSX build errors, significantly improving code quality and stability.

#### API Documentation
*   **Redoc Viewer**: Added a new API documentation page at `/redoc.html`, which uses Redoc to render the `openapi.yml` specification, providing a clear and interactive reference for developers.

### Technical Notes
*   **Backend Validation**: The backend successfully passes a "build test" (dependency installation and server initialization), confirming its runnability.
*   **Git Ignore**: Corrected the Git index to properly ignore `__pycache__` directories as defined in the `.gitignore` file.
*   **Full-Stack Connectivity**: This release marks the first time the frontend and backend are connected for a majority of the application's features, laying the groundwork for future development.

---

# Release v0.1.0: JB SQUARE Prototype

## Overview

This is the initial public release of the JB SQUARE Prototype, a web platform designed to serve as a central hub for industry and research professionals. This version establishes the foundational architecture of the platform, including a modular frontend, a robust backend API, and a fully functional News & Events section.

The primary goal of this release is to provide a stable, well-documented starting point for future development and to showcase the core user experience.

---

### Key Features & Enhancements

*   **Project Rebranding:** The platform has been officially named **JB SQUARE**. All assets, documentation, and configuration files have been updated to reflect the new branding.
*   **Dynamic News & Events Section:**
    *   A completely redesigned page to display news, events, and announcements.
    *   Features a filterable grid layout, allowing users to switch between content categories.
    *   Powered by a dedicated backend API, replacing all previous placeholder content.
*   **Homepage Content Preview:** The main homepage now includes a section that previews the latest news and events, providing users with a glimpse of recent activity.
*   **Modern UI Components:**
    *   Introduced a suite of responsive and reusable components, including `NewsCard` and `EventCard`.
    *   A redesigned `Footer` with updated branding and a professional layout.
*   **Developer Experience (DX) Improvements:**
    *   The `README.md` has been significantly improved with clear, professional instructions for setting up the development environment.
    *   Documented the **Mock Service Worker (MSW)** setup, which is the recommended workflow for frontend development.

### Technical Notes

*   **Backend:** The FastAPI backend now includes distinct data models and API endpoints for `News` and `E-vents`.
*   **Frontend:** The React application now uses `swr` for data fetching and is configured to work seamlessly with the MSW mock API.
*   **Stability:** This release includes numerous bug fixes related to type safety, component rendering, and data fetching, establishing a stable baseline for the project.
