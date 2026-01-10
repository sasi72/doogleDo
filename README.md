# 📝 TodoFlow

A sleek, full-stack task management application built with a focus on speed and modern UI. This app allows users to seamlessly manage their daily workflow with a high-performance React frontend and a robust Node.js backend.

## 🚀 Features

*   **Create:** Instantly add new tasks to your list.
*   **Edit:** Modify existing tasks to keep your goals accurate.
*   **Delete:** Remove completed or unwanted tasks with a single click.
*   **Responsive Design:** Fully optimized for desktop and mobile viewing.
*   **Real-time Updates:** Powered by Vite for a lightning-fast development and user experience.

## 🛠️ Tech Stack

### Frontend
*   **React 18 + Vite:** Modern, high-speed component-based UI.
*   **HTML5 & CSS3:** Custom styles for a clean, professional look.

### Backend
*   **Node.js:** Scalable runtime environment.
*   **Express.js:** Lightweight web framework for handling API routes.

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

The application runs both frontend and backend concurrently:

```bash
npm run dev
```
The application will run on `http://localhost:5173/`

## Project Structure

```
doogleDo/
├── src/
│ ├── Components/
│ │ ├── todo.jsx
│ │ ├── todoForm.jsx
│ │ └── todoList.jsx
│ ├── App.css
│ ├── App.jsx
│ └── main.jsx
├──index.html
├──todo.svg
├──eslint.config.js
└──vite.config.js