# Full Stack Todo Application

A full-stack Todo web application built with:

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Node.js + Express
- **Database:** MySQL
- **Containerized with Docker & Docker Compose**

## Folder Structure

```bash
todo-application/ #root folder
├── backend/ # Express backend
├── frontend/ # React + Vite frontend
├── mysql/ # MySQL initialization scripts
├── docker-compose.yml # Docker Compose setup
└── README.md
```
---

## Getting Started

### 1. Prerequisites
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

### 2. Running the Project with Docker Compose

```bash
# Clone the repository
git clone https://github.com/RandimaD25/todo-application.git
cd todo-application

# Build and run all services (frontend, backend, MySQL)
docker-compose up --build
```

Application URLs:

    Frontend: http://localhost:3000
    Backend API: http://localhost:4000

---

### 3. Database Setup
The project includes a SQL initialization script:
```bash
mysql/init.sql
```
When Docker Compose runs for the first time, this script will automatically:

    Create the todo_app database
    Create the task table
    No manual DB setup needed

---

### 4. Building

```bash
# Build frontend only
docker-compose build frontend

# Build all services (Frontend, Backend, Database)
docker-compose build

# Run all services
docker-compose up
```

---

### 5. Running test

```bash
# Frontend test coverage
cd frontend
npx jest --coverage 
```

```bash
# Backend test coverage
cd backend
npx jest --coverage 
```

Author: 

    Name: Randima Dias
    GitHub: [@RandimaD25](https://github.com/RandimaD25)
