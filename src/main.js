import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import VueTextareaAutosize from "vue-textarea-autosize";

createApp(App).use(router).use(VueTextareaAutosize).mount('#app');
