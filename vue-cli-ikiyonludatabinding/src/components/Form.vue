<template>
  <form @click.prevent="sendData">
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
    <select v-model="framework">
      <option>Vue</option>>
      <option>React</option>>
      <option>Angular</option>>
    </select>
    <p>{{ framework }}</p>
    <hr>
    <input type="checkbox" id="checkbox1" v-model="checked">
    <label for="checkbox1">Onay</label>
    <p>Sonuç : {{ checked ? 'Onaylıyorum' : 'Onaylamıyorum' }}</p>
    <br>
    <div>
      <input type="checkbox" id="Vue" value="Vue" v-model="frameworks"/>
      <label for="Vue">Vue</label>
    </div>
    <div>
      <input type="checkbox" id="React" value="React" v-model="frameworks"/>
      <label for="React">React</label>
    </div>
    <div>
      <input type="checkbox" id="Angular" value="Angular" v-model="frameworks"/>
      <label for="Angular">Angular</label>
    </div>
    <p>Seçilen Frmaeworkler:{{ frameworks }}</p>
    <hr>
    <h3>Öğrenciler</h3>
    <input type="text" v-model="student" @keyup.alt="addstudent">
    <div v-for="student in students" :key="student">
        <span @click="deletestudent(student)">{{student}}</span>
    </div>
    <br>    
    <button>Gönder</button>
  </form>
</template>

<script>
export default {
    data(){
      return{
        text:'Bir metin yazınız',
        framework:'FrameWork Seçiniz',
        checked:false,
        frameworks:[],
        student:'',
        students:[]
      }        
    },
    methods:{
      addstudent(e){
        if(e.key==',' && this.student){
          if(!this.students.includes(this.student))
          {
              this.students.push(this.student)
          }
          this.student='';
        }
      },
      deletestudent(student){
          this.students = this.students.filter(f=> f !== student);
      },
      sendData(){
        console.log("Başarılı")
      }
    }

}
</script>

<style>

</style>