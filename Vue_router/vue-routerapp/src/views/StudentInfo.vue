<template>
  <div>
    <h3>Öğrenci Bilgi Sayfası</h3>
    <p>Öğrenci Numarası:{{id}}</p>
  </div>
</template>

<script>
export default {
    /*router içindeki index dosyasında props:true ise buraya ihtiyacımız olmuyor.props yazıyruz data yerine
    data(){
        return{
            studentId:this.$route.params.id
        }
    }*/
    props:["id"]
}
</script>

<style>

</style>