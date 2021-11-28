<template>
  <div class="about-champ-container">
      <div class="about-champ"
      v-for="champion in singleChampion"
      :key="champion.id">
      <figure class="champion-img-container">
          <img :src="championImg" alt="" class="imgC">
      </figure>

        <transition
        >
            <h1>
            {{champion.name}}
            </h1>
        </transition>
      
      <div class="champion-summary">   

        <div class="champ-label">
            <h1>Yep</h1>
        </div>
        
        <div class="summary">
         <p>
          {{champion.lore}}
          </p>
        </div>

      </div>
  <div class="ablity-container">
        <div class="ablity-container-inner"
        v-for="ability in champion.spells"
        :key="ability.id">
          <AblitiyImg :champion="champion" :ability="ability"></AblitiyImg>
          
      </div>
  </div>

  <div class="slide-cont">
    <div class="slide-cont-inner">

<hooper :vertical="true" style="  height: 85%; 
  width:25%;
  display: flex;
  justify-content: center;
  align-content: center;" :itemsToShow="2" :centerMode="true">
   <slide v-for="(skin, indx) in champion.skins" :key="skin.num" :index="indx" class="center">
      <ChampionSkins :champion="champion" :skin="skin"></ChampionSkins>
  </slide>
  <hooper-navigation slot="hooper-addons"></hooper-navigation>
</hooper>

  </div>
</div>


  </div>
        
  </div>

</template>

<script>
import AblitiyImg from "@/components/AblitiyImg.vue";
import ChampionSkins from "@/components/ChampionSkins.vue";
import { Hooper, Slide , Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "ChampionAbout",
    data() {
    return {
          current: 0,
    direction: 1,
    transitionName: "fade",
    show: false,
    slides: [
      { className: "blue" },
      { className: "red" },
      { className: "yellow" }
    ],
        singleChampion: [],
        imgOne: [],
    }
    
},
    created: function() {
        this.fetchData();
    },
    props: [
        "champion",
         "ability",
    ],
      components: {AblitiyImg, ChampionSkins, Hooper,
    Slide,  HooperNavigation},

  mounted() {
    this.show = true;
  },

    methods: {
      slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    },
      
        fetchData: async function() {
          try {
              let newData = [];
              const response = await fetch (
                  `http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion/${this.$route.params.id}.json`
              )
              const data = await response.json();
              console.log(data.data)
              this.singleChampion = data.data
              this.champImg = Object.keys(data.data)
              this.imgOne = newData

              
              this.champImg.forEach((value) => {
                newData.push(value);
                console.log(value);
              });

              
      
          } catch (error) {
              alert("Sorry the api is currently not working and we are not getting the data. Please try again later")
          }
      },
    },
        computed: {
    championImg: function() {
      return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.imgOne}_0.jpg`;
    },
  }
    
}
</script>

<style>

.center {

}

.slide-cont {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 100%;
}

.slide-cont-inner {
  display: flex;
   justify-content: center;
  align-content: center;
  width: 75%;
  height: 85%;
}

.ablity-container {
  display: flex;
  align-content: center;
  justify-content: center;
  height: 20%;
  width: 100%;
}

.ablity-container-inner {
    display: flex;
  align-content: center;
  justify-content: center;
    height: 100%;
  width: 25%;
}
.champion-summary {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 30%;
    max-width: 80%;
}

.champ-label {
    display: flex;
        justify-content: center;
    align-items: center;
    width: 50%;
    height: 75%;
}
.summary {
        display: flex;
        justify-content: center;
    align-items: center;
    width: 50%;
    height: 75%;
  
}
.about-champ-container {
    background-color: black;
    flex-direction: column;
    display: flex;
height: 200vh;
width: 100vw;
}

.about-champ {
  color: white;
        justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 100%;
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