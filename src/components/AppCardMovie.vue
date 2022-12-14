<template>

    <div class="card position-relative border-0">
        <div v-if="character.poster_path === null">
            <img src="../Netflix-new-icon.png" class="my-img">
        </div>
        <div v-else>
            <img :src="store.imageDef.defaultImg + character.poster_path" class="card-img-top" alt="...">

        </div>

        <div class="p-2 my-card">

            <h5 class="card-title "><span class="text-danger fw-bold  ">TITLE:</span> <br> {{ character.original_title
            }}</h5>
            <div class="mb-2">
                <i class="fa-solid fa-star" v-for="stars in allStars"></i>
                <i class="fa-regular fa-star" v-for="stars in noneStars"></i>
            </div>

            <p class="card-text text-secondary "> <span class="text-danger fw-bold me-3">OVERVIEW:</span> <br>
                {{ character.overview }}</p>


            <div>
                <span class="text-danger fw-bold ">LANG:</span> <br> 
                <span :class="' fi fi-' + movieLanguage(character.original_language)"></span>
            </div>
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
        movieLanguage(lang) {
            if (lang === 'en') {
                return 'gb';
            } else if (lang === 'uk') {
                return 'ua';
            } else if (lang === 'hi') {
                return 'in';
            } else if (lang === 'ja') {
                return 'jp';
            } else {
                return lang;
            }
        },
        starAverage() {
            this.allStars = [];
            this.noneStars = [];
            const starRate = (Math.floor(this.character.vote_average / 2))
            const numZero = 5 - starRate;
            for (let i = 0; i < starRate; i++) {
                this.allStars.push('stars')
            }
            for (let i = 0; i < numZero; i++) {
                this.noneStars.push('stars')
            }

        }

    },
    created() {
        this.starAverage();
    },
};
</script>
<style lang="scss">
.my-img {
    width: 100%;
    max-height: 87vh;

}



.card {
    overflow: hidden;

    img {
        z-index: 2;
        display: block;
        width: 100%;

    }

    .my-card {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        overflow: auto;
        color: white;

    }

    &:hover {
        overflow: auto;

        .my-card {
            z-index: 4;
            overflow-y: auto;
            background-color: rgba(0, 0, 0, 0.637)
        }

    }

    .fa-star {
        color: yellow;
    }
}
</style>