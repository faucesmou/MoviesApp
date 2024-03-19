

export interface Movie {
    id: number;
    title: string; 
    description: string;
    releaseDate: Date;
    rating: number;
    backdrop: string;
    poster: string;
    
}

export interface FullMovie extends Movie {
    genres: string[];
    duration: number;
    budget: number;
    originalTitle: string;
    productionCompanies: string[];
}

