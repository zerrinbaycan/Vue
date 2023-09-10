var app = Vue.createApp({
    template:`
        <h2>Başlık : {{baslik}}</h2>    
        <h3>İçerik : {{icerik}}</h3>    
        <p>Yorum Sayısı: {{yorumsayisi}}</p>
    `,data(){
      return { 
                baslik:'Vue Uygulaması',
                icerik:'Vue 3 ile uygulama geliştirme öğreniyorum',
                yorumsayisi:4
             }
    }
});

app.mount('#app');