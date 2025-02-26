import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import MovieSingleCard from './MovieSingleCard.jsx';

const MoviesCard = ({ movies }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {movies.map((item) => (
        <MovieSingleCard key={item._id} movie={item} />
      ))}
    </div>
  );
};

export default MoviesCard;