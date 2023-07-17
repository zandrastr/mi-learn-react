import axios from "axios";
import { IMovie } from "../models/IMovie";

export interface IMovieLoader {
    movie: IMovie;
}

export const movieLoader = async ({params}: any) => {

    const response = await axios.get<IMovie>('https://www.omdbapi.com/?apikey=9508b94c&i=' + params.id);

    const data: IMovieLoader = {movie: response.data};
    return data;

}