import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './components/App.vue';
import { routes } from './routes.js';

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');