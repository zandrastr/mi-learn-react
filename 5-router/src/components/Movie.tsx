import { useLoaderData } from 'react-router-dom';
import { IMovieLoader } from '../loaders/movieLoader';

export const Movie = () => {
  const { movie } = useLoaderData() as IMovieLoader;

  return (
    <>
      <h2>{movie?.Title}</h2>
      <img src={movie?.Poster} alt={movie?.Title} />
    </>
  );
};
