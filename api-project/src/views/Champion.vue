<template>
  <div class="about-champ-container">
      <div class="about-champ" :style="{backgroundImage:championImg}" 
      v-for="champion in singleChampion"
      :key="champion.id">
      <div>   
        <h1 class="title">
          {{champion.name}}
        </h1>
        </div>
        <div>
         <p>
          {{champion.blurb}}
          </p>
        </div>
      </div>
      <figure class="champion-img-container">
      </figure>
  </div>
</template>

<script>
export default {
    data() {
    return {
        singleChampion: [],
        imgOne: [],
    }
    
},
    created: function() {
        this.fetchData();
    },
    methods: {
        fetchData: async function() {
          try {
              let newData = [];
              const response = await fetch (
                  `http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion/${this.$route.params.id}.json`
              )
              const data = await response.json();
              this.singleChampion = data.data
              this.champImg = Object.keys(data.data)
              this.imgOne = newData
              
              this.champImg.forEach((value) => {
                newData.push(value);
                console.log(value);
              });

              
      
          } catch (error) {
              alert(error)
          }
      }
    },
        computed: {
    championImg: function() {
      return `url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.imgOne}_0.jpg)`;
    },
  }
    
}
</script>

<style scoped>

.about-champ-container {
    display: flex;
height: 100vh;
width: 100vw;
}

.champion-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
}

.about-champ {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 50%;
    font-size: 1.5rem;
}


.img {
    width: auto;
    height: 50%;
}
</style>