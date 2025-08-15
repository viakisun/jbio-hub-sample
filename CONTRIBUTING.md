# Contributing to JBio Hub Sample

First off, thank you for considering contributing to this project! Your help is greatly appreciated. This document provides guidelines for contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Atomic Design](#atomic-design)
- [Creating New Components](#creating-new-components)
- [Coding Style](#coding-style)
- [Submitting Changes](#submitting-changes)

## Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** to your local machine:
    ```sh
    git clone https://github.com/your-username/jbio-hub-sample.git
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm start
    ```

## Project Structure

The project is organized using a component-based architecture. The most important directory for contributors is `src/components`.

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── pages/
│   └── templates/
├── styles/
│   ├── globals.css
│   └── tokens.ts
└── ...
```

-   **`src/components`**: Contains all React components, organized by the Atomic Design methodology.
-   **`src/styles`**: Contains global styles and design tokens.
    -   `tokens.ts`: Defines the design system (colors, spacing, typography, etc.).

## Atomic Design

This project follows the principles of Atomic Design to ensure that components are modular, reusable, and easy to maintain.

-   **Atoms:** The basic building blocks of the application. These are the smallest possible components, such as buttons, icons, and inputs. They cannot be broken down further.
    -   *Example:* `src/components/atoms/Button/index.tsx`

-   **Molecules:** Groups of atoms bonded together. These are relatively simple components that act as a single unit.
    -   *Example:* `src/components/molecules/SearchBar/index.tsx` (combines an `Icon`, an `input`, and a `Button`).

-   **Organisms:** More complex components that consist of groups of molecules and/or atoms. These components form distinct sections of an interface.
    -   *Example:* `src/components/organisms/Header/index.tsx`

-   **Templates:** Page-level objects that place components into a layout. Templates focus on the page's content structure, rather than the final content itself.

-   **Pages:** Specific instances of templates. They are the highest level of component and represent a full page in the application.
    -   *Example:* `src/components/pages/DashboardPage/index.tsx`

## Creating New Components

When adding a new component, please follow these steps:

1.  **Identify the level:** Determine whether the component is an atom, molecule, or organism.
2.  **Create a new directory:** Create a new directory for your component within the appropriate folder (e.g., `src/components/atoms/MyNewAtom`).
3.  **Create the component file:** Inside the new directory, create an `index.tsx` file.
4.  **Write the component:**
    -   Use TypeScript.
    -   Define props with an `interface`.
    -   Use `React.FC` to type the component.
    -   Export the component as the default export.
5.  **Export the component:** Add an export line to the main `index.ts` file in the component directory (e.g., `src/components/atoms/index.ts`) if one exists.

## Coding Style

-   **Follow the existing style:** Please try to match the coding style of the existing files.
-   **TypeScript:** All new code should be written in TypeScript.
-   **Prettier:** This project uses Prettier for code formatting. Please run `npx prettier --write .` before committing your changes.

## Submitting Changes

1.  **Create a new branch** for your changes.
2.  **Commit your changes** with a clear and descriptive commit message.
3.  **Push your branch** to your fork on GitHub.
4.  **Open a pull request** to the main repository.

Thank you for your contribution!
