import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Landing/Landing.vue";
import AddTool from "../views/FormToolAdd/FormToolAdd.vue";
// import i18n from "../i18n";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   redirect: `/${i18n.locale}`
  // },
  {
    path: "/",
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
        path: "/add_tool",
        name: "addTool",
        component: AddTool
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
