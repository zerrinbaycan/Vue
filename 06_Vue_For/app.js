const app = Vue.createApp({
    template:`
        <ul>
            <li v-for="gun in gunler">{{gun}}</li>
        </ul>
    `,
    data(){
        return{
            gunler:["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumaretsi","Pazar"]
        }
    },
    method:{

    }
})


app.mount("#app")