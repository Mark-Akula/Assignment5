import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";
import LoginView from "../views/loginView.vue";
import PurchaseView from "../views/purchaseView.vue";
import CartView from "../views/cartView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/purchase",
    component: PurchaseView,
  },
  {
    path: "/cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
