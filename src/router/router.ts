import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home"
import Custom from "../components/Custom"

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/custom",
      name: "Custom",
      component: Custom
    },
    {
        path: "/",
        name: "Home",
        component: Home
    }
  ]
});
