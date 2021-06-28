<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">По РТ</router-link>  -->
      <!-- <router-link class="m-3" to="/about">По кожуунам</router-link> -->
      
      <router-link class="m-1" to="/rez">Результаты</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
