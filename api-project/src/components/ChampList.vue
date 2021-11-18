<template>
  <div class="container">
      <ul class="champ-table" >
        <li class="champ-list-item"
        v-for="champ in champions"
        :key="champ.id"
        >
        <ChampionCard :champ="champ"></ChampionCard>
        <div class="name">
        {{champ.id}}
        </div>
        </li>
    </ul>
  </div>
</template>

<script>
import ChampionCard from "@/components/ChampionCard.vue";
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
                  "http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json?"
              )
              const data = await response.json();
              console.log(data)
              this.champions = data.data
          } catch (error) {
              alert(error)
          }
      }
  },
  
  components: {ChampionCard},
};
</script>



<style>
</style>

<style>
.container {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}
.champ-table {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;    
    height: 100%;
    max-width: 80%;

    }
.champ-list-item {
    border: solid 1px;
    padding: .5rem;
    margin: .5rem;
    list-style: none;
    height: 47%;
    width: 17%;
    font-size: 2rem;
    color: black;
}

.name {
    height: 15%;
    width: 100%;
}
</style>


