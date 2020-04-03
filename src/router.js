import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/groceries",
      name: "groceries",
      component: () => import("./components/GroceriesList")
    },
    {
      path: "/groceries/:id",
      name: "grocery",
      component: () => import("./components/Grocery")
    }
  ]
});
