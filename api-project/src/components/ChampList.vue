<template>
  <div>
    <h1>TEST</h1>
    <ul class="champ-table">
      <li
        class="champ-list-item"
        v-for="champ in champions"
        :key="champ.name"
      >
        {{ champ.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PkmnList",
  data() {
    return { champions: [] ,
    };
  },
  props: [],
  mounted: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const result = await fetch(
          `http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json?api_key=RGAPI-360739c5-1a96-46f6-b942-bcf95baa916c`
        );
        const data = await result.json();
        console.log(data);
        this.champions = data.results;

      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style>

</style>