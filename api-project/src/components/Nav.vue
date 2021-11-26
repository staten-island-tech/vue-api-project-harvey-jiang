<template>
  <div id="app">
    <Slide right>
      <router-link to="/" class="nav-link">Home</router-link> 
      <router-link to="/AllLeaugeChamps" class="nav-link">Champions</router-link>
    </Slide>
    <router-view />
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
    name: "Nav",
      components: {
        Slide 
    }
}
</script>

<style scoped>

</style>
