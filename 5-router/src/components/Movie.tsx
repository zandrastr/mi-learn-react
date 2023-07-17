import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMovie } from '../models/IMovie';

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get<IMovie>('https://www.omdbapi.com/?apikey=9508b94c&i=' + (id ?? ''));

      setMovie(response.data);
    };

    if (!movie) void getMovie();
  }, [movie, id]);

  return (
    <>
      <h2>{movie?.Title}</h2>
      <img src={movie?.Poster} alt={movie?.Title} />
    </>
  );
};
