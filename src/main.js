import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

Vue.config.productionTip = false;

new Vue({
  router,                 // Configura el enrutador si tienes configurado Vue Router.
  render: h => h(App)     // Renderiza el componente App en el div con id="app".
}).$mount('#app');        // Monta la instancia de Vue en el div con id="app".
