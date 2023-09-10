const app = Vue.createApp({
    template:`
        <div v-bind:style="stylegreen">Deneme Yazısı Bind kullanımı Yeşil renk<div>
        <div :style="stylered">Deneme Yazısı Bind kullanımı Kırmızı renk<div>
    `,
    data(){
        return{
            stylegreen:"color:green",
            stylered:"color:red"
        }
    },
    methods:{

    }
});

app.mount("#app")