const app2 = Vue.createApp({
    template:`
        <ul>
            <li v-for="person in persons">Çalışan :{{person.isim}} Maaş:{{person.maas}}</li>
        </ul>
    `,
    data(){
        return{
            persons:[
                {isim:"Berna",maas:4250},
                {isim:"Zerrin",maas:4500},
                {isim:"Anıl",maas:5000},
                {isim:"Beren",maas:15000}
            ]
        }
    },
    method:{

    }
})


app2.mount("#app2")