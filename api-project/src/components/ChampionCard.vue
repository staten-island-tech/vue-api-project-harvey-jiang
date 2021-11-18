<template>
  <div class="champ-container">
    <div class="query">
<<<<<<< HEAD
<<<<<<< HEAD
      <router-link>
      <img class="img" :src="championImg"  alt="">
      <div class="name">
        {{champ.id}}
      </div>
      </router-link>
=======
      <img class="img" :src="championImg"  alt="">
>>>>>>> parent of f094a41 (awaaa)
=======
      <img class="img" :src="championImg"  alt="">
>>>>>>> parent of f094a41 (awaaa)
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
    methods: {

    },
     computed: {
    championImg: function() {
      return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.champ.id}_0.jpg`;
    },
  },
}
</script>

<style>
.champ-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 85%;
  border: solid 1px;
}
.query {
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