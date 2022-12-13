<template >
    <div class="mb-5 ">
        <nav class="navbar bg-black">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold text-danger">BOOLFLIX</a>
    <form class="d-flex" role="search" @submit.prevent="onSearchClick" >
      <input class="form-control me-2 bg-dark text-white" type="search" placeholder="cerca film/serie TV" aria-label="Search" name="title" v-model="store.inputTitle">
      
      <button class="btn btn-outline-danger" type="submit">Cerca</button>
    </form>
  </div>
</nav>
    </div>
    
</template>
<script>
import { store,fetchMovies  } from "../store";
export default {
    data () {
    return {
      store,
       filters: {
       original_title: "",
     
       },
       filtersSeries: {
       original_name: "",
     
       }
    };
  },
  emits: ["search"],
  computed: {
   
  },
  methods: {
     onSearchClick () {
        fetchMovies();
       this.$emit("search", { ...this.filters });
      
    },
   
  }
}
  
</script>
<style lang="scss">
    
</style>