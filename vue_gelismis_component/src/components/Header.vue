<template>
    <div>
        <slot></slot>
        <hr>
        <input type="text" v-model="name" />
        <input type="text" v-model="surname" />
        <p>{{ namesurname }}</p>
        <hr>
        <input type="number" v-model="number1">
        <br/>
        <input type="number" v-model="number2">
        <br/>
        <input type="number" v-model="total">
    </div>  
</template>

<script>
export default {
    data(){
        return{
            name:'',
            surname:'',
            number1:0,
            number2:0,
            total:0
        }
    },
    watch:{
        number1(newvalue,oldvalue){
            console.log('Sayılar:' ,oldvalue,newvalue)
            this.total = parseInt(this.number1)+ parseInt(this.number2)
        },
        number2(newvalue,oldvalue){
            console.log('Sayılar:' ,oldvalue,newvalue)
            this.total = parseInt(this.number1)+ parseInt(this.number2)
        }
    },
    computed:{
        namesurname(){
            return this.name + ' ' + this.surname
        }
    }
}
</script>

<style>

</style>