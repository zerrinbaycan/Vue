<template>
    <div>
        <h1>Öğrenciler routhe path üzerinden</h1>
        <div v-for="student in students" :key="student.id">
            <router-link :to="{path:`/students/${student.id}`}">{{student.name}}</router-link>             
        </div>

        <h1>Öğrenciler - route name üzerinden</h1>
        <div v-for="student in students" :key="student.id">
            <router-link :to="{name:'studentInfo',params:{id:student.id}}">{{student.name}}</router-link>             
        </div>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            students:[
                {id:1,name:"Zerrin",not:60},
                {id:2,name:"Berna",not:75},
                {id:3,name:"Ayşe",not:80},
                {id:4,name:"Anıl",not:100}
            ]
        }        
    },
}
</script>

<style>

</style>