import express from 'express';
import { Movie } from '../movieModels.js'; 


const router = express.Router();

// Route for Save a new movie
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.director ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, director, publishYear',
      });
    }
    const newMovie = {
      title: request.body.title,
      director: request.body.director,
      publishYear: request.body.publishYear,
    };

    const movie = await Movie.create(newMovie);

    return response.status(201).send(movie);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Movies from database
router.get('/', async (request, response) => {
  try {
    const movies = await Movie.find({});

    return response.status(200).json({
      count: movies.length,
      data: movies,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
  console.log(response);
});

// Route for Get One movie from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const movie = await Movie.findById(id);

    return response.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a movie
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.director ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, director, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Movie.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Movie not found' });
    }

    return response.status(200).send({ message: 'Movie updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a movie
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Movie.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Movie not found' });
    }

    return response.status(200).send({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;