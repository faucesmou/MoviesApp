import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { Movie } from "../../entities/movie.entity";

export const moviesNowPopularUseCase = async ( fetcher: HttpAdapter ): Promise< Movie[]> => {


    try{
        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular');

        return popular.results.map( MovieMapper.fromMovieDBResultToEntity );
  
    } catch (error){
        console.log(error);        
        throw new Error("Error fetching movies -popuplar");
        
    } 
}


