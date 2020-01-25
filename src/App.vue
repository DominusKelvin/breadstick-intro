<template>
  <div id="app">
    <h1>Breadstick Demo</h1>
  </div>
</template>
<script>
import Breadstick from 'breadstick'

const breadstick = new Breadstick()

export default {
  mounted () {
    breadstick.notify('I love me some breadstick 🥰');
  }
}
</script>
<style>
#app {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
