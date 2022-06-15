require('./bootstrap');
import {createApp} from 'vue';
import router from "./routes"
import store from "./store";
import Navigation from "./Components/layouts/Navigation";
import Footer from "./Components/layouts/Footer";

const app = createApp({});
app.component('navbar-component', Navigation);
app.component('footer-component', Footer);
app.use(router, store);
app.mount('#app');

