<template>
  <div class="about-champ-container">
      <div class="about-champ"
      v-for="champion in singleChampion"
      :key="champion.id">
      <figure class="champion-img-container">
          <img :src="championImg" alt="" class="imgC">
      </figure>
      
      <div class="champion-summary">   
        <h1 class="title">
          {{champion.name}}
        </h1>
        <div class="summary">
            <h1>Yep</h1>
         <p>
          {{champion.blurb}}
          </p>
        </div>
      </div>
   </div>
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
      return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.imgOne}_0.jpg`;
    },
  }
    
}
</script>

<style>

.champion-summary {
    height: 40%;
    width: 100%;
   color: white;
}

.summary {
    display: flex;

}
.about-champ-container {
    background-color: black;
    flex-direction: column;
    display: flex;
height: 100vh;
width: 100vw;
}

.champion-img-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.about-champ {
 
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
}


.imgC {
    width: 100%;
    height: 70%;
}
</style>