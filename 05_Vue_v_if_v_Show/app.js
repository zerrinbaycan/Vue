const app = Vue.createApp({
    //v-if DOM'a hiç yazılmıyor,v-show DOM'a yazılıyor ama display:none olarak geliyor
    template:`
        <div v-if='IfInfo'>Deneme Yazısı v-if True</div>
        <div v-if='!IfInfo'>Deneme Yazısı v-if False</div>

        <div v-show='showInfo'>Deneme Yazısı v-show True</div>
        <div v-show='!showInfo'>Deneme Yazısı v-show False</div>
        <button @click='toggle'>
            <span v-if='IfInfo'>IfInfo True showInfo False</span>
            <span v-else>IfInfo False showInfo True</span>
        </button>
    `,
    data(){
        return{
            IfInfo:true,
            showInfo:false
        }        
    },
    methods:{
        toggle(){
            this.showInfo = !this.showInfo;
            this.IfInfo = !this.IfInfo;
        }
    }
})

app.mount('#app')