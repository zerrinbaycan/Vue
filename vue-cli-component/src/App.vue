<template>
  <div>
    <Title/>
    <h3>App.vue Başlık</h3>
  </div>  
</template>

<script>
import Title from './components/Title.vue'
export default {
  name: 'App',
  components:{
    Title
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
