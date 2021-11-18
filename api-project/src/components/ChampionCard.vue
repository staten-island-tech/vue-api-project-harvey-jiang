<template>
  <div class="champ-container">
    <div class="query">
      <router-link :to="championPath" class="link">
      <img class="img" :src="championImg"  alt="">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c9125dd7b083eef4fd946e725c725bbc6204cadc
      <div class="name">
        {{champ.id}}
      </div>
      </router-link>
<<<<<<< HEAD
=======
>>>>>>> parent of f094a41 (awaaa)
=======
>>>>>>> parent of f094a41 (awaaa)
=======
>>>>>>> parent of f094a41 (awaaa)
=======
>>>>>>> c9125dd7b083eef4fd946e725c725bbc6204cadc
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