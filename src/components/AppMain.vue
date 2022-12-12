
<template >
    <div v-for="(singleCharacter, index) in store.movies" :key="index">

        <AppCardMovie :character="singleCharacter"></AppCardMovie>
    </div>
    
</template>



<script>
import AppCardMovie from './AppCardMovie.vue';
import { store, fetchMovies } from "../store";
export default {
    components: { AppCardMovie },
    name: "AppMain",
    data() {
        return {
            store,
        };
    },
   
    methods: {

    },
    created() {

        fetchMovies();


    },
}
</script>
<style lang="scss">

</style>