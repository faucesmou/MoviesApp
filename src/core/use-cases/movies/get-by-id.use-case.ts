import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { FullMovieResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";



export const getMovieByIdUseCase = async (
    fetcher: HttpAdapter,
    movieId: number 
    ): Promise<FullMovie> => {

        try {
            const fullMovie = await fetcher.get<FullMovieResponse>(`/${movieId}`);

            const fullMovieData = MovieMapper.fromMovieDBToEntity( fullMovie );

            return fullMovieData
            //fetcher
            //mapeo

            //return fullMovie

        } catch (error) {
            throw new Error(`Cannot get movie by id ${ movieId}`);
            
        }


}