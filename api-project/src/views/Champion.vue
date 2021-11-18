<template>
  <div>
      <h1 class="test" 
      v-for="champion in singleChampion"
      :key="champion.id">
          {{champion.name}}
          <p>
          {{champion.blurb}}
          </p>
      </h1>
  </div>
</template>

<script>
export default {
    data() {
    return {
        singleChampion: [],
    }
    
},
    created: function() {
        this.fetchData();
    },
    methods: {
        fetchData: async function() {
          try {
              const response = await fetch (
                  `http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion/${this.$route.params.id}.json`
              )
              const data = await response.json();
              console.log( Object.keys(data.data))
              this.singleChampion = data.data
          } catch (error) {
              alert(error)
          }
      }
    }
}
</script>

<style>
.test {
    font-size: 2rem;
}
</style>