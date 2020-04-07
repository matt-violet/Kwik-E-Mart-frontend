import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/Home")
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("./components/Shop")
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
    },
    {
      path: "/addpayment",
      name: "addpayment",
      component: () => import("./components/AddPayment")
    },
    {
      path: "/confirmpayment",
      name: "confirmpayment",
      component: () => import("./components/ConfirmPayment")
    },
    {
      path: "/thankyou",
      name: "thankyou",
      component: () => import("./components/ThankYou")
    }
  ]
});
