<template>
  <div class="container">
      <h1>hi</h1>
      <ul class="champ-table" >
        <li class="champ-list"
        v-for="champ in champions"
        :key="champ.data"
        >{{champ.id}}
        </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: "ChampList",
  data() {
      return {
          champions: []
      }
  },
  created: function() {
      this.fetchData();
  },
  props: [],
  methods: {
      fetchData: async function() {
          try {
              const response = await fetch (
                  "http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json?api_key=RGAPI-9643bc95-4d0b-4a16-a3e6-2b34889a128b"
              )
              const data = await response.json();
              console.log(data)
              this.champions = data.data
          } catch (error) {
              alert(error)
          }
      }
  }
};
</script>

<style>
</style>

<style>
.champ-table {
    height: 75vh;
    width: 75vw;
    font-size: 5rem;
    background-color: aqua;
    }
li {
    font-size: 2rem;
    color: black;
}
</style>


