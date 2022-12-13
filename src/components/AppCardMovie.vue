<template>
    <div class="card bg-dark ">
        <div v-if="character.backdrop_path === 'null'">
           <img src="../vite.svg" >
        </div>
        <div v-else>
            <img :src="store.imageDef.defaultImg + character.backdrop_path" class="card-img-top" alt="...">

        </div>
        

        <div class="card-body text-white">
            <h5 class="card-title fw-bold">{{ character.original_title }}</h5>
            <p class="card-text text-secondary ">{{ character.vote_average }}</p>
        </div>






    </div>

</template>
<script>
import { store } from "../store";
export default {
    name: "AppCardMovie",
    props: {
        character: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            store
        };
    },
    computed: {
    },
    methods: {
    }
};
</script>
<style lang="scss">

</style>