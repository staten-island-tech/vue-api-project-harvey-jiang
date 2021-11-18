import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
<<<<<<< HEAD
 {
  path: "/",
  name: "Home",
  component: () => import("../views/Home.vue"),
 },
 {
  path: "/allLeaugeChamps",
  name: "AllLeaugeChamps",
  component: () => import("../views/AllLeaugeChamps.vue"),
 },
=======
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/AllLeaugeChamps",
    name: "AllLeaugeChamps",
    component: () => import("../views/AllLeaugeChamps.vue"),
  },
>>>>>>> parent of f094a41 (awaaa)
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
