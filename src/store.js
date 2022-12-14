import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    imageDef: { defaultImg: "https://image.tmdb.org/t/p/original" },
    inputTitle: "",
    movies: [],
    series: [],
    loading: false,
    activeFilters: null,
    OnActiveFilters: null

});

export function fetchMovies() {
    const apiKey = "5fcb73cd3a970c09f70964f3ca26b129"
    const rootUrl = "https://api.themoviedb.org/3"
    const popularMovies = "/movie/popular"
    const popularSeries = "/tv/popular"
    const searchMovie = "/search/movie"
    const searchTv = "/search/TV"

    //FILM POPOLARI
    axios.get(rootUrl + popularMovies, {
        params: {
            api_key: apiKey,

        }


    })
    
        .then((resp) => {

            store.movies = resp.data.results;
            console.log(resp);
      
        })


    // RICERCA FILM
    axios.get(rootUrl + searchMovie, {
        params: {
            api_key: apiKey,
            query: store.inputTitle
        }


    })
        .then((resp) => {

            store.movies = resp.data.results;
            console.log(resp);
        })



  

    //RICERCA SERIE TV
    axios.get(rootUrl + popularSeries, {
        params: {
            api_key: apiKey,
            query: store.inputTitle
        }


    })
        .then((resp) => {

            store.series = resp.data.results;
            console.log(resp);
        })
}






