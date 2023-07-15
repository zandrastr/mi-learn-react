import axios from "axios"
import { IOmdbResponse } from "../models/IOmdbResponse";
import { IMovie } from "../models/IMovie";

export interface IMoviesLoader {
    movies: IMovie[];
}

export const moviesLoader = async () => {
    const response = await axios.get<IOmdbResponse>("https://www.omdbapi.com/?apikey=9508b94c&s=star");
    
    const data: IMoviesLoader = {movies: response.data.Search};

    return data;
}