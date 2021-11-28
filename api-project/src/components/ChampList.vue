<template>
  <div class="container">
      <ul class="champ-table" >
        <li class="champ-list-item"
        v-for="champ in champions"
        :key="champ.id"
        >
        <ChampionCard :champ="champ"></ChampionCard>
        <div class="name">
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
                  "http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion.json?"
              )
              const data = await response.json();
              console.log(data)
              this.champions = data.data
          } catch (error) {
              alert("Sorry the api that we get our information from is currently down. Please try again later")
          }
      }
  },
  
  components: {ChampionCard},
};
</script>



<style>
</style>

<style>

.search-bar-cont {
    width: 100%;
   height: 50%;

}

.name {
    font-size: 3rem;
    background-color: blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 100%;
}


.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
}
.champ-table {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;    
    height: 100%;
    max-width: 90%;
    }
.champ-list-item {
    border: solid 1px;
    padding: .3rem;
    margin: .5rem;
    list-style: none;
    height: 50%;
    font-size: 2rem;
    color: black;
}


</style>


