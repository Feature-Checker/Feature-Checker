import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

// TODO - Paginacja wyników - https://www.npmjs.com/package/vue-infinite-loading
// TODO - zrobienie na 100% translacji
