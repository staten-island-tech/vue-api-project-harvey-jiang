<template>

  <div class="skin-container-inner">
    <img :src="SkinImg" alt="" class="skin-img">
  </div>

</template>

<script>
export default {
  name: "ChampionSkins",
    props: [
        "champion",
         "skin",
    ],

  computed: {
    SkinImg: function() {
      return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champion.id}_${this.skin.num}.jpg`;
    },
  },
}
</script>

<style>


.skin-container-inner {
  height: 100%;
  width: 100%;
}

.skin-img {
  height: 70%;
  width: 90%;
}

</style>