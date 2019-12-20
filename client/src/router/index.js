import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Landing/Landing.vue";
import AddTool from "../views/FormToolAdd/FormToolAdd.vue";
import Error404 from "../views/Error404/Error.vue";

import Frontend from "../views/Templates/Development/Frontend.vue";
import i18n from "../i18n";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "add_tool",
        name: "addTool",
        component: AddTool
      },
      {
        path: "404",
        name: "404",
        component: Error404
      },
      {
        path: "frontend",
        name: "frontend",
        component: Frontend
      },
      {
        path: "*",
        redirect: "404"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
