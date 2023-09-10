<template> 
  <h3>{{title}}</h3>
  <input type="text" ref="name">
  <br><br>
  <input type="text" ref="password">
  <br><br>
  <button @click="login">Giriş Yap</button>
  <br><br>
  <p v-if="islogin">Giriş Başarılı</p>
  <p v-else>Giriş Başarısız</p>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      title:"Login",
      name:"Zerrin",
      password:"1234",
      islogin:false
    }
  },
  methods:{
    login(){
      return this.$refs.name.value ===  this.name && this.$refs.password.value === this.password ? this.islogin = true : this.islogin = false;
    }
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
