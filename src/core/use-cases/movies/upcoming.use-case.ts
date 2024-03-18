import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { Movie } from "../../entities/movie.entity";

export const moviesUpcomingUseCase = async ( fetcher: HttpAdapter ): Promise< Movie[]> => {


    try{
        const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

        return upcoming.results.map( MovieMapper.fromMovieDBResultToEntity );
        //console.log({nowPlaying});   
        //console.log({ upcoming });
        
    } catch (error){
        console.log(error);        
        throw new Error("Error fetching movies -upcomingUseCase");
        
    } 
}


