import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        //api_key: '408610d502012b399e42d0d52d7a6c09',
        api_key: THE_MOVIE_DB_KEY ?? 'No-key',
        language: 'es'
    }
})