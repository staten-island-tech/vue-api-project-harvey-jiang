<template>
  <figure class="ablities-container">
    <div class="ablities-container-inner">
    <img :src="championAbility" alt="">
    <figcaption>{{ability.name}}</figcaption>
      <figcaption>{{ability.description}}</figcaption>
    </div>
  </figure>
</template>

<script>

export default {
    name:  "AblitiyImg",
      
    props: [
      "champion",
      "ability"
    ],
      computed: {
            championAbility: function() {
      return `http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/${this.ability.image.full}`;
    },

  }
}
</script>

<style>

</style>