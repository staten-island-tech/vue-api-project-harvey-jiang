<template>
    <div class="nav-bar">
      <router-link to="/AllLeaugeChamps" class="nav-link">Champions</router-link>
  </div>

</template>

<script>


export default {
    name: "Nav",
      components: {
    }
}
</script>

<style scoped>
  


.nav-link {
      justify-content: center;
  align-items: center;
  display: flex;
  width: 50%;
  text-decoration: none;
  color: brown;
}


.nav-bar {
  font-size: 2.5rem;
    height: 5vh;
    justify-content: center;
  align-content: center;
  display: flex;
  width: 100%;
}


</style>
