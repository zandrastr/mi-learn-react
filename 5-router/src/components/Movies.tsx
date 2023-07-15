import { useLoaderData } from 'react-router-dom';
import { IMoviesLoader } from '../loaders/moviesLoader';

export const Movies = () => {
  const { movies } = useLoaderData() as IMoviesLoader;

  return (
    <>
      {movies.map((movie) => {
        return (
          <div>
            <h3>{movie.Title}</h3>
          </div>
        );
      })}
    </>
  );
};
