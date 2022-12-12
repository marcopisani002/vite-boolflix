import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    movies: [],
    series: [],
    searchText:[]

});

export function fetchMovies(){
    const rootUrl="https://api.themoviedb.org/3"
axios.get(rootUrl + "/movie/550",{
params:{
api_key:"5fcb73cd3a970c09f70964f3ca26b129",
movie_id:""
}


})
.then((resp) =>{
    
    store.movies = resp.data.results;
console.log(store);
})





}