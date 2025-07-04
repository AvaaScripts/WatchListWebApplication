// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import BackButton from '../components/BackButton.jsx';
// import Spinner from '../components/Spinner.jsx';

// const ShowMovie = () => {
//   const [movie, setMovies] = useState({});
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams();
  
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:5555/movies/${id}`)
//       .then((response) => {
//         setMovies(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl my-4'>Show Movies</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Id</span>
//             <span>{movie._id}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Title</span>
//             <span>{movie.title}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Director</span>
//             <span>{movie.director}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
//             <span>{movie.publishYear}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Create Time</span>
//             <span>{new Date(movie.createdAt).toString()}</span>
//           </div>
//           <div className='my-4'>
//             <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
//             <span>{new Date(movie.updatedAt).toString()}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowMovie;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';

const ShowMovie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [poster, setPoster] = useState('');
  
  const { id } = useParams();
  const OMDB_API_KEY = 'fe722912'; // Replace with your OMDB key

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);

        // Fetch poster after getting movie title
        fetchPoster(response.data.title);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const fetchPoster = async (title) => {
    try {
      const res = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${OMDB_API_KEY}`);
      if (res.data.Poster && res.data.Poster !== 'N/A') {
        setPoster(res.data.Poster);
      }
    } catch (error) {
      console.log('Error fetching poster:', error);
    }
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Movie Details</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          
          {poster && (
            <img src={poster} alt="Movie Poster" className="w-64 h-96 object-cover mb-4 self-center" />
          )}

          <div className='my-2'>
            <span className='text-xl mr-4 text-gray-500'>Id:</span>
            <span>{movie._id}</span>
          </div>
          <div className='my-2'>
            <span className='text-xl mr-4 text-gray-500'>Title:</span>
            <span>{movie.title}</span>
          </div>
          <div className='my-2'>
            <span className='text-xl mr-4 text-gray-500'>Director:</span>
            <span>{movie.director}</span>
          </div>
          <div className='my-2'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year:</span>
            <span>{movie.publishYear}</span>
          </div>
          <div className='my-2'>
            <span className='text-xl mr-4 text-gray-500'>Create Time:</span>
            <span>{new Date(movie.createdAt).toString()}</span>
          </div>
          <div className='my-2'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time:</span>
            <span>{new Date(movie.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMovie;
