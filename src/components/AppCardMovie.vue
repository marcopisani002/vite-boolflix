<template>

    <div class="row  g-4">
        <div class="col-md-3">
            <div class="card bg-dark">
                <img :src="store.imageDef.defaultImg + character.backdrop_path" class="card-img-top" alt="...">
                <div class="card-body text-white">
                    <h5 class="card-title">{{ character.original_title }}</h5>
                    <p class="card-text">{{ character.vote_average }}</p>
                </div>
            </div>
        </div>
    </div>



    <!-- <div class="d-flex ">
            <div class="col-md-2">
                <div class="card bg-dark">
                    <img :src="store.imageDef.defaultImg + character.backdrop_path" class="card-img-top" alt="...">
                    <div class="card-body text-white">
                        <h5 class="card-title">{{ character.original_title }}</h5>
                        <p class="card-text text-secondary">{{ character.vote_average }}</p>
                    </div>
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