<template>
  <div class="home">
    <ChampList></ChampList>
  </div>
</template>

<script>
// @ is an alias to /src
import ChampList from "../components/ChampList.vue";
export default {
  name: "Home",
  components: {
    ChampList,
  },
};
</script>
