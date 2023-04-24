import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);
import router from './router'
import store from "./store";

import setupInterceptors from './services/setupInterceptors';

setupInterceptors(store);
createApp(App)  
.use(router)
.use(store)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
