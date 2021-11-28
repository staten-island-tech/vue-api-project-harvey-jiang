<template>

  <div class="skin-container-inner">
    <img :src="SkinImg" alt="" class="skin-img" id="skin-img">
    <div class="skin-name">
    <h1>{{this.skin.name}}</h1>
    </div>
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

.skin-name {
width: 80%;
  position: absolute;
  text-align: center;
}

.skin-container-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

}

.skin-img {
  height: 80%;
  width: 80%;
}

</style>