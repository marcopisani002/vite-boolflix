<template >
  <div class="container">
    <h1 class="text-center mt-5 fw-bold">BOOLFLIX</h1>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { fetchMovies, store } from "./store";

export default {
    components: { AppHeader, AppMain },
    data () {
    return {
      welcome: "Welcome Boolean",
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
@use "./styles/general.scss";
</style>