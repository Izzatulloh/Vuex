<template>
  <Home />
  <About/>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
export default {
  components: {
    Home,
    About
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
