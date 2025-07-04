import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateMovies from './pages/CreateMovies';
import ShowMovie from './pages/ShowMovie';
import EditMovie from './pages/EditMovie';
import DeleteMovie from './pages/DeleteMovie';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        
        <header className="flex justify-between items-center p-4 shadow-md">
          <h1 className="text-2xl font-bold">WatchList</h1>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:scale-105 transition"
          >
            {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        <main className="p-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies/create' element={<CreateMovies />} />
            <Route path='/movies/details/:id' element={<ShowMovie />} />
            <Route path='/movies/edit/:id' element={<EditMovie />} />
            <Route path='/movies/delete/:id' element={<DeleteMovie />} />
          </Routes>
        </main>

      </div>
    </div>
  );
};

export default App;
