<template>
  <div class="about-champ-container">
      <div class="about-champ"
      v-for="champion in singleChampion"
      :key="champion.id">
      <figure class="champion-img-container">
          <img :src="championImg" alt="" class="imgC" id="imgC">
      </figure>

    <div class="champ-title">
            <h1>
            {{champion.name}}
            </h1>
            <h2>{{champion.title}}</h2>
</div>
      
      <div class="champion-summary">   
        
        <div class="summary">
         <p>
          {{champion.lore}}
          </p>
        </div>

      </div>
  <div class="ablity-container">
          <div class="ablity-container-inner" id="bad-flx">
              <PassiveImg :champion="champion"></PassiveImg>
          </div>
        <div class="ablity-container-inner"
        v-for="ability in champion.spells"
        :key="ability.id">
          <AblitiyImg :champion="champion" :ability="ability"></AblitiyImg>
      </div>
  </div>

  <div class="slide-cont">
    <div class="slide-cont-inner" id="hopper2">

<hooper :vertical="true" style="  height: 50%; 
  width: 20%;
  display: flex;   border: black solid;
  justify-content: center;
  align-content: center;" :itemsToShow="3" :centerMode="true">
   <slide v-for="(skin, indx) in champion.skins" :key="skin.num" :index="indx" class="center">
      <ChampionSkins :champion="champion" :skin="skin"></ChampionSkins>
  </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
</hooper>

  <hooper style="  height: 90%; 
  width: 80%;  display: flex; border: black solid;
  justify-content: center; font-size: 2rem;
  align-items: center;" :itemsToShow="1.2" :centerMode="true">
   <slide v-for="(skin, indx) in champion.skins" :key="skin.num" :index="indx" class="center">
      <ChampionSkins :champion="champion" :skin="skin"></ChampionSkins>
  </slide>
     <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
</hooper>
  

  </div>
</div>


  </div>
        
  </div>

</template>

<script>
import AblitiyImg from "@/components/AblitiyImg.vue";
import PassiveImg from "@/components/PassiveImg.vue";
import ChampionSkins from "@/components/ChampionSkins.vue";
import { Hooper, Slide , Navigation as HooperNavigation,  Pagination as HooperPagination,} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "ChampionAbout",
    data() {
    return {
        singleChampion: [],
        imgOne: [],
    }
    
},
    created: function() {
        this.fetchData();
    },
    props: [

    ],
      components: {AblitiyImg, ChampionSkins, Hooper,
    Slide,  HooperNavigation,  HooperPagination, PassiveImg},


    methods: {      

        fetchData: async function() {
          try {
              let newData = [];
              const response = await fetch (
                  `http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion/${this.$route.params.id}.json`
              )
              const data = await response.json();
              console.log( Object.keys(data.data))
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

@media (max-width: 880px) {  
   *{
     font-size: 95%;
   }
}

 @media (max-width: 840px) {  
   *{
     
     font-size: 80%;
   }
 }


 #bad-flx {
   font-size: .7rem;
 }

.ablities-container-inner {
  flex-direction: column;
    display: flex;
  align-items: center;
  justify-content: center;
}
.ablities-container {
  display: flex;
  text-align: center;
  align-items: flex-start;
  justify-content: center;
}

.champ-title {
  text-align: center;
  display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 2.5rem;
}



.slide-cont {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  height: 100%;
  width: 100%;
}

.slide-cont-inner {
  display: flex;
   justify-content: flex-start;
  align-items: center;
  width: 75%;
  height: 85%;
}



.ablity-container {
  margin-top: .5rem;
  display: flex;
  align-content: center;
  justify-content: center;
  height: 70%;
  font-size: 1.5rem;
  width: 90%;
}

.ablity-container-inner {
    display: flex;
  align-content: center;
  justify-content: center;
    height: 100%;
  width: 20%;
}
.champion-summary {
  font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 30%;
    max-width: 80%;
}

.summary {
        display: flex;
        justify-content: center;
    align-items: center;
    width: 80%;
    height: 75%;
  
}
.about-champ-container {
    background-color: #000;
    flex-direction: column;
    display: flex;
height: 270vh;
width: 100vw;
}

.about-champ {
  color: #FFFFFF;
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
    height: 40%;
}


.imgC {
    width: 60%;
    height: 70%;
}
</style>