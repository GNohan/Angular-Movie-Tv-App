//Model for movies object
export class Movie {
    poster_path: string;
    original_title: string;
    overview: string;
    release_date: string;

    constructor(public name: string, public release: string, public description: string, public poster: string){
        this.original_title = name;
        this.release_date = release;
        this.overview = description;
        this.poster_path = "http://image.tmdb.org/t/p/w185/" + poster;
    }  
}
