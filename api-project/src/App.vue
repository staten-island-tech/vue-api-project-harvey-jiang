<template>
<nav class="nav-bar-cont">
  <Nav></Nav>
           <router-view />
</nav>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  name: "App", 
      components: {
        Nav
    }
}
</script>

<style>
html,
body,
* {
  text-align: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


</style>