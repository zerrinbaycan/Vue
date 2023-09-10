const app = Vue.createApp({
    template:`
        <h2>Frameworkler</h2>
        <ul>
            <li class="list" :class="{selected:framework.selected}" v-for= "framework in frameworks" @click="selectTag(framework)" >name: {{framework.name}} selected : {{framework.selected}}</li>
        </ul>

        <h3>Seçilen Frameworkler</h3>
        <ul>
            <li v-for= "f in selectedTags">{{f.name}}</li>
        </ul>
    `,
    data(){
        return{
            frameworks:[
                {name:"Vue",selected:true},
                {name:"React",selected:false},
                {name:"Svelte",selected:false},
                {name:"Angular",selected:false}
            ]
        }
    },
    methods:{
        selectTag(framework){
            framework.selected = !framework.selected
        }
    },
    computed:{
        selectedTags(){
            console.log("değişiklik oldu");
            return selected = this.frameworks.filter(i=> i.selected == true)
        }        
    }
})

app.mount("#app")