<template>
  <div id="start">
    <div id="nav">
      <router-link to="/start">Home</router-link> |
      <router-link to="/start/about">About</router-link> |
      <router-link to="/start/todolist">TODOList</router-link> |
      <router-link to="/start/calculator">Calculator</router-link> |
      <router-link to="/lightmodel/quickmodel">Lightmodel</router-link> |
    </div>
    <router-view/>
  </div>
</template>
<style lang="less">
#start {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>