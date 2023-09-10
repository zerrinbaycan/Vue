<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
    data() {
        return{
            title:"Vue 3'e Giriş"
        }
        
    }
}
</script>
/* scoped: sadece bu sayfada geçerli olsun demek!*/
<style scoped>
h3{
  color: orangered;
  font-size: 30px;
  font-weight: 700;
}
</style>