import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("./components/GroceriesList")
    },
    {
      path: "/groceries/:id",
      name: "grocery",
      component: () => import("./components/Grocery")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./components/Cart")
    }
  ]
});
