<template>
  <div class="ablities-container"><h1>{{champion.id}}</h1>
  <div
      v-for="abilityone in ability"
      :key="abilityone.id">
      <h1>{{abilityone.id}}</h1>
   <img class="img" :src="ablityImg">
     </div>
  </div>
</template>

<script>
export default {
name: "ChampionAblities",

    props: [
      "ability",
      "champion",
    ],
     
     computed: {
    ablityImg: function() {
      return `http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/${this.ability.image.sprite}`;
    },
  },

}




</script>

<style>
.ablities-container {
    color: white;
}
</style>