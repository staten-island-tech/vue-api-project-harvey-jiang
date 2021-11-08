<template>
  <div class="home">
    <ChampList
      v-for="pokemon in pokemons"
      :key="pokemon"
      :pokemon="pokemon"
    ></ChampList>
  </div>
</template>

<script>
// @ is an alias to /src
import ChampList from "@/components/ChampList.vue";
export default {
  //options API
  name: "Home",
  components: {
    ChampList,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
        );
        const data = await response.json();
        this.pokemons = data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
