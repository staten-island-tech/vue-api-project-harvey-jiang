import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
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
 {
  path: "/champion/:id",
  name: "Champion",
  component: () => import("../views/Champion.vue"),
 },
];

const router = new VueRouter({
 mode: "history",
 base: process.env.BASE_URL,
 routes,
});

export default router;
