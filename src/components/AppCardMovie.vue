<template>
    
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card bg-dark">
                    <img :src="store.imageDef.defaultImg + character.backdrop_path" class="card-img-top" alt="...">
                    <div class="card-body text-white">
                        <h5 class="card-title">{{ character.original_title }}</h5>
                        <p class="card-text text-secondary">{{ character.vote_average }}</p>
                    </div>
                </div>
            </div>

        </div>
        <!-- <div class="card-group  ">
            <div class="card text-danger bg-dark ">
                <img :src="store.imageDef.defaultImg + character.backdrop_path" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ character.original_title }}</h5>
                    <p class="card-text">}{{ character.vote_average }</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

        </div> -->
   
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