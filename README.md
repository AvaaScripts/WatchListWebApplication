
# WatchList Web Application

## Overview

WatchList is a full-stack web application that allows users to create, manage, and track their favorite movies and TV shows. Users can add items to their watchlist, mark items as watched, and leave ratings or reviews.

## Features

- User authentication (login/signup)
- Add, edit, and remove movies/TV shows from the watchlist
- Mark items as watched/unwatched
- Leave ratings and reviews
- Responsive UI for both desktop and mobile

## Tech Stack

### Frontend:

- React.js
- Vite
- Tailwind CSS / Bootstrap (for styling)
- Fetch API / Axios (for API calls)

### Backend:

- Node.js with Express.js
- MongoDB (Mongoose ORM)

### Deployment:
- Database: MongoDB Atlas

## Installation & Setup

### Prerequisites:

- Node.js & npm installed
- MongoDB instance running (local or cloud)
- Git installed

### Steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AvaaScripts/WatchListWebApplication.git
   cd WatchListWebApplication
   ```
2. **Backend setup:**
   ```sh
   cd backend
   npm install
   npm start
   ```
3. **Frontend setup:**
   ```sh
   cd frontend
   npm install
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## API Endpoints

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | /api/auth/signup    | Register new user       |
| POST   | /api/auth/login     | User login              |
| GET    | /api/watchlist      | Get all watchlist items |
| POST   | /api/watchlist      | Add new item            |
| PUT    | /api/watchlist/\:id | Update item             |
| DELETE | /api/watchlist/\:id | Delete item             |

## Future Enhancements

- Dark mode support
- Social media sharing
- AI-powered recommendations



