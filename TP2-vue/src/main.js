import { createApp } from 'vue';
import App from './App.vue';
import router from './components/router'; // Import createRouter and createWebHistory

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
