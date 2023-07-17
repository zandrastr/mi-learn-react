import axios from "axios";
import { IMovie } from "../models/IMovie";
import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";

export interface IMovieLoader {
    movie: IMovie;
}

const pathNames = {
    movieDetail: "/movie/:id",
} as const;

interface Args extends ActionFunctionArgs {
    params: Params<ParamParseKey<typeof pathNames.movieDetail>>;
}

export const movieLoader = async ({params}: Args) => {

    const response = await axios.get<IMovie>(`https://www.omdbapi.com/?apikey=9508b94c&i= ${String(params.id)}`);

    const data: IMovieLoader = {movie: response.data};
    return data;

}