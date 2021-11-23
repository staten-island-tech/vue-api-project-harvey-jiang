<template>
  <div class="about-champ-container">
      <div class="about-champ"
      v-for="champion in singleChampion"
      :key="champion.id">
      <figure class="champion-img-container">
          <img :src="championImg" alt="" class="imgC">
      </figure>

        <div class="title">
            <h1>
            {{champion.name}}
            </h1>
        </div>
      
      <div class="champion-summary">   

        <div class="champ-label">
            <h1>Yep</h1>
        </div>
        
        <div class="summary">
         <p>
          {{champion.blurb}}
          </p>
        </div>
        
      </div>
      <ChampionAblities :champion="champion"></ChampionAblities>
      
   </div>
  </div>
</template>

<script>
import ChampionAblities from "@/components/ChampionAblities.vue";
export default {
    data() {
    return {
        singleChampion: [],
        imgOne: [],
    }
    
},
components: {ChampionAblities},

    created: function() {
        this.fetchData();
    },
    props: [
        "champion"
    ],
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
      return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.imgOne}_0.jpg`;
    },
  }
    
}
</script>

<style>

.champion-summary {
    display: flex;
    height: 30%;
    width: 100%;
   color: white;
}

.champ-label {
    width: 50%;
    height: 75%;
}
.summary {
    width: 50%;
    height: 75%;
}
.about-champ-container {
    background-color: black;
    flex-direction: column;
    display: flex;
height: 120vh;
width: 100vw;
}

.about-champ {
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 100%;
}

.title {
    color: white;
}

.champion-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
}




.imgC {
    width: 90%;
    height: 90%;
}
</style>