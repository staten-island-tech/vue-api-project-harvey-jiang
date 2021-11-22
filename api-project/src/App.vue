<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="nav-link">Home</router-link> 
      <router-link to="/AllLeaugeChamps" class="nav-link">Champions</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>

html,
body,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
   height: 5vh;
   width: 100vw;
}

#nav {
  align-items: center;
width: 100%;
height: 100%;
display: flex;

}

.nav-link {
  flex: 1; 
  display: flex;
  justify-content: center;
  align-content: center;

}
</style>
