<template >
    <div class="mb-5 ">
        <nav class="navbar bg-black">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold text-danger">BOOLFLIX</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2 bg-dark text-white" type="search" placeholder="cerca film/serie TV" aria-label="Search" >
      <!-- name="title" v-model="filters.title" -->
      <button class="btn btn-outline-danger" type="button">Cerca</button>
    </form>
  </div>
</nav>
    </div>
</template>
<script>
import { store  } from "../store";
export default {
    data () {
    return {
      store,
    //   filters: {
    //     title: "",
     
    //   }
    };
  },
  emits: ["search"],
  computed: {
   
  },
  methods: {
    // onSearchClick () {
    //   this.$emit("search", { ...this.filters });
    // }
  }
}
  

</script>
<style lang="scss">
    
</style>