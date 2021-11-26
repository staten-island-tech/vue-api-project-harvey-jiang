<template>
  <Nav></Nav>
</template>

<script>
import Nav from "@/components/Nav.vue";
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
  
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

   .bm-burger-bars {
      background-color: aquamarine;
    }
.nav-link {
  color: white;
}
</style>