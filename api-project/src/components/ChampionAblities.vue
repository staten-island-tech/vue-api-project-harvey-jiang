<template>
  <div class="ablities-container"><h1>{{champion.id}}</h1></div>
</template>

<script>
export default {
name: "ChampionAblities",

    props: [
      "champion",
    ],

}

</script>

<style>
.ablities-container {
    color: white;
}
</style>