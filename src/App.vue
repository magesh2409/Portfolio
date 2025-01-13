<template>
  <div id="app">
     <!-- <About></About> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import About from './views/About.vue';
export default {
  name: 'App',
  components: {
    // About
  }
}
</script>

<style>
#app {
  font-family: poppins , sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  height: 100%;
  width: 100%;
}
</style>
