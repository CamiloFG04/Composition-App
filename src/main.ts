import './assets/main.css'
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)


VueQueryPlugin.install(app, {
    queryClientConfig: { 
        defaultOptions: { 
            queries: {
                gcTime: 1000 * 120, //2 min
                refetchOnReconnect: 'always'
            } 
        } 
    }
})


app.use(router)


app.mount('#app')

