<template>
  <div class="champ-container" tabindex='0'>
    <div class="champ-container-inner">
      <router-link :to="championPath" class="link">
      <img class="img" :src="championImg"  alt="">
      <div class="name">
        {{champ.id}}
      </div>
      </router-link>
  </div>
  </div>
</template>

<script>
export default {
    name: "ChampionCard",
    props: [
      "champ",
    ],
     data() {
    return {
      singleChampion: {},
    };
  },
     computed: {
    championImg: function() {
      return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.champ.id}_0.jpg`;
    },
        championPath: function() {
    return `/champion/${this.champ.id}`;

    }
  },
}
</script>

<style>

.link {
  text-decoration: none;
  color: #111;
}
.champ-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 85%;
  border: solid 1px;
}
.champ-container-inner {
  height: 100%;
  width: 100%;
  color: #111;
  font-size: 1.5rem;
}

.img {
  height: 100%;
  width: 100%;
}


</style>