# Costs-React
[Link to application](https://rogeralbuquerque.github.io/Costs-React/)
## Overview

Costs-React is a front-end web application built with React and Vite to support project budget management. The system allows creating projects, listing existing projects, editing project details, and managing services associated with each project. The application uses a local simulated backend with `json-server`, providing a CRUD experience during development.

## Main objective

The purpose of the project is to study and demonstrate React concepts, routing with `react-router-dom`, REST API consumption, and simple state management using hooks. The solution focuses on:

- creating projects with budget and category
- listing registered projects
- editing project data
- adding and removing services linked to the project
- viewing total cost and controlling budget

## Technologies used

- React 18
- Vite
- React Router DOM
- React Icons
- json-server
- Modern JavaScript (ES6+)
- CSS for component styling

## Project structure

The main project structure is:

- `src/`
  - `App.jsx` — entry point of the React application with routing.
  - `main.jsx` — initializes the React app and mounts it to the DOM.
  - `index.css` — global styles.
  - `components/`
    - `pages/` — page components and application routes.
      - `Home/` — home screen.
      - `Projects/` — project-related pages.
        - `AllProjects/` — project list.
        - `NewProject/` — new project creation form.
        - `services/` — project details with services.
      - `Nav/` — navigation bar.
      - `Footer/` — simple footer.
      - `Container/` — layout wrapper for main content.
      - `randons/` — extra pages for contact and company.
    - `extraComponents/` — reusable button and form components.
- `db.json` — local database for `json-server`.
- `package.json` — dependencies and scripts.

## How the system works at a high level

The application is structured as a SPA (single-page application) that uses routing to change views without reloading the page.

1. `App.jsx` mounts the `BrowserRouter`, navigation menu, and routes.
2. `Nav` displays links to the main pages: Home, Projects, Company, and About.
3. `AllProjects` fetches `http://localhost:5000/projetos` to display locally stored projects.
4. `NewProject` renders a form that sends data to `json-server` via POST to create a new project.
5. `Services` shows details of a specific project, including associated services, and updates the project via PATCH.
6. `db.json` maintains the project and service data model during development.

The application uses React hooks (`useState`, `useEffect`) to store local state and manage lifecycle effects. Native HTTP requests are made with `fetch`.

## Main features

- Register new projects with name, budget, and category.
- List registered projects.
- Delete projects directly from the list.
- Edit project data on a detail screen.
- Add services to each project.
- Remove services.
- Display the total cost used by the project.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/RogerAlbuquerque/Costs-React.git
cd Costs-React
```

2. Install dependencies:

```bash
npm install
```

## Running

There are two servers to run to use the complete application:

1. Local backend with `json-server`:

```bash
npm run backend
```

2. Front-end with Vite:

```bash
npm run dev
```

Then open the URL shown in the terminal by Vite (usually `http://localhost:5173`).

## How to use

- Access the home page and click "Create project" to add a new project.
- Navigate to "Projects" to see the list of registered projects.
- Use the "Edit" button on a project to access the services screen and edit project data.
- On the services screen, add services to the project and remove items as needed.
- Click "Delete" to remove a project from the list.

## Technical notes and improvement points

### What works

- Use of React Router for navigation between pages.
- Consumption of the local backend via `json-server`.
- Create, read, update, and delete projects.
- Management of services linked to each project.

### Current limitations

- Part of the application still contains fallback code with hard coded data and commented sections.
- Several state updates use `location.reload()` to reload the page, which is not ideal for a SPA.
- There is direct DOM manipulation (`document.forms`, `document.getElementById`) instead of React state control.
- The edit form and the service addition screen are in the same component, which makes responsibility separation harder.
- The use of `fetch` in multiple components could be refactored into a centralized API service.
- Routes are prefixed with `/Costs-React`, which works for GitHub Pages but could be improved with a `basename` configuration in the router.

### Improvements to make later

- Refactor API logic into a separate module to avoid duplicated `fetch` calls.
- Replace full page reloads with local state updates.
- Create independent form components for project and service.
- Add more robust input validation and error handling with UI messages.
- Use `React Context` or `Redux` to manage global project state if needed.
- Implement a real backend (Express, Node.js, or another) in production, replacing `json-server`.
- Adjust routes to work more flexibly in environments other than GitHub Pages.

## Expected data structure

Each project in the local backend follows this model:

```json
{
  "PName": "Project name",
  "PBudget": "8000",
  "PCategory": "infra",
  "cost": 600,
  "services": [
    {
      "SName": "test service",
      "SBudget": "400",
      "SDescricao": "test"
    }
  ],
  "id": 1
}
```

## Conclusion

Costs-React is a solid study project I built early in my career to learn React and how to consume local APIs with `json-server`. It demonstrates building a CRUD application with routing and reusable components, providing a clear basis for evolving into a more mature solution with a real backend and more robust state management.
