import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateMovies from './pages/CreateMovies';
import ShowMovie from './pages/ShowMovie';
import EditMovie from './pages/EditMovie';
import DeleteMovie from './pages/DeleteMovie';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/create' element={<CreateMovies />} />
      <Route path='/movies/details/:id' element={<ShowMovie />} />
      <Route path='/movies/edit/:id' element={<EditMovie />} />
      <Route path='/movies/delete/:id' element={<DeleteMovie />} />
    </Routes>
  );
};

export default App;