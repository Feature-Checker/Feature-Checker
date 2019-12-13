import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import Multiselect from "vue-multiselect";
import VueAnalytics from "vue-analytics";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

Vue.config.productionTip = false;
Vue.component("multiselect", Multiselect);

router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }

  // set the current language for i18n.
  i18n.locale = language;
  next();
});

Vue.use(VueAnalytics, {
  id: "UA-153080047-1",
  router
});

new Vue({
  router,
  store,
  i18n,
  Multiselect,
  render: h => h(App)
}).$mount("#app");

// TODO - Paginacja wyników - https://www.npmjs.com/package/vue-infinite-loading
// TODO - zrobienie na 100% translacji
// TODO - Przygotować modal na Cookies
