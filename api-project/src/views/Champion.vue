<template>
<div>
  <ChampionAbout></ChampionAbout>
  <ChampionSkins></ChampionSkins>
</div>
</template>

<script>
import ChampionSkins from "@/components/ChampionSkins.vue"
import ChampionAbout from "@/components/ChampionAbout.vue";

export default {
name: "Champion",
components: {
    ChampionAbout,
    ChampionSkins
    },
}


</script>

<style>

</style>