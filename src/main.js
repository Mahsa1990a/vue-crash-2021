// entry point of view

import { createApp } from 'vue'; // importing createApp methode from Vue
import App from './App.vue'; // importing our root component
import router from './router'

createApp(App).use(router).mount('#app');
