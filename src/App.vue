<template >
   <AppHeader></AppHeader>
  <div class="container">

   
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