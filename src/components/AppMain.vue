<template >
    <div>
        <h4 class="text-white fw-bold mb-4">Film</h4>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(singleCharacter, index) in store.movies" :key="index">
            <AppCardMovie :character="singleCharacter"></AppCardMovie>
        </div>
    </div>

    <div>
        <h4 class="text-white fw-bold mt-5 mb-4">Serie TV</h4>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div class="col" v-for="(singleCharacter, index) in store.series" :key="index">
            <AppCardSeries  :character="singleCharacter"></AppCardSeries>
        </div>
    </div>
    
</template>



<script>
import AppCardMovie from './AppCardMovie.vue';
import { store, fetchMovies } from "../store";
import AppCardSeries from './AppCardSeries.vue';
export default {
    components: { AppCardMovie, AppCardSeries },
    name: "AppMain",
    data() {
        return {
            store,
        };
    },
    methods: {
    },
    mounted() {
        fetchMovies();
    },
}
</script>
<style lang="scss">
</style>