<template>

  <figure class="ablities-container">
    <div class="ablities-container-inner">
    <img :src="passiveAbility" alt="" tabindex="0">
    <figcaption tabindex="0">{{champion.passive.name}}</figcaption>
    <figcaption tabindex="0">{{champion.passive.description}}</figcaption>
    </div>
  </figure>
  
</template>

<script>
export default {
name: "PassiveImg",
  props: [
      "champion",
    ],
      computed: {
            passiveAbility: function() {
      return `http://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/${this.champion.passive.image.full}`;
    },
    
  }
}
</script>

<style>

</style>