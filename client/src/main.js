import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import Multiselect from "vue-multiselect";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;
Vue.component("multiselect", Multiselect);
new Vue({
  router,
  store,
  i18n,
  Multiselect,
  render: h => h(App)
}).$mount("#app");

// TODO - Paginacja wyników - https://www.npmjs.com/package/vue-infinite-loading
// TODO - zrobienie na 100% translacji
