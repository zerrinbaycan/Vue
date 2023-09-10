<template>
    <div>
      <h3>{{ titleText }}</h3>
      <h4>{{ text }}</h4>
    </div>
  </template>
  
  <script>
  export default {
    props:['titleText','text'],
      data() {
          return{
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