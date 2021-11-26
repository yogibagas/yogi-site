<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HeaderVue from "./components/global/Header.vue";
import Home from "./components/views/Home.vue";
</script>

<template>
  <tetikus :transitionSpeed="500" :delay="5" border-color="brown" :size="24" />
  <HeaderVue />
 <Home/>

</template>

<script>
export default {
  name: "App",
  component: {
    HeaderVue,
    Home,
  },
};
</script>

<style scoped></style>
