export class Show{
    original_name: string;
    first_air_date: string;
    overview: string;
    poster_path: string;

    constructor(public name: string, public air_date: string, public description: string, public poster: string){
        this.original_name = name;
        this.first_air_date = air_date;
        this.overview = description;
        this.poster_path = "http://image.tmdb.org/t/p/w185/" + poster;
    }
}
