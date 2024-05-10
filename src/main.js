import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Main from "./pages/Main.vue";
import Shop from "./pages/Shop.vue";
import Blog from "./pages/Blog.vue";
import History from "./pages/History.vue";
import Account from "./pages/Account.vue";
import {createPinia} from "pinia";
import HeadphoneItem from "./pages/HeadphoneItem.vue";



const routes = [
    {path: '/', component: Main},
    {path: '/shop', component: Shop},
    {path: '/blog', component: Blog},
    {path: '/history', component: History},
    {path: '/account', component: Account},
    {path: '/headphone/:id', component: HeadphoneItem, props: true},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
const pinia = createPinia()

const app = createApp(App);
app.use(pinia)
app.use(router)
app.mount('#app');
