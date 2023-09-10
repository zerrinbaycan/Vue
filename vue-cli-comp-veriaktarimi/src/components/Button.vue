<template>  
  <div @click.alt="clean">
    <h3>Temizle</h3>
  </div>
</template>
// click.alt,click.shift  -> shifte,alta basılı iken çalışsın 
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        clean(){
            this.$emit('clean')
        }
    }
}
</script>

<style>

</style>