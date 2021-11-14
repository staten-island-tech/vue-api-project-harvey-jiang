<template>
  <div class="container">
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
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
    max-width: 100vw;

    }
.champ-list {
    list-style: none;
    height: 25%;
    width: 25%;
    font-size: 2rem;
    color: black;
}
</style>


