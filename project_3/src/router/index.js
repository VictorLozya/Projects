import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import GamesLayout from "@/pages/GamesLayout.vue";
import AllGamesPage from "@/pages/AllGamesPage.vue";
import GamePage from "@/pages/GamePage.vue";
import AboutUs from "@/pages/AboutUs";
import SearchGames from "@/pages/SearchGames";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
    meta: { keepAlive: true },
  },

  {
    path: "/all",
    name: "all",
    component: GamesLayout,
    meta: { keepAlive: true },
    children: [
      {
        path: "",
        component: AllGamesPage,
        meta: { keepAlive: true },
      },
      {
        path: ":id",
        name: "game-page",
        component: GamePage,
        meta: { keepAlive: true },
      },
      {
        path: "/search",
        name: "search",
        component: SearchGames,
        meta: { keepAlive: true },
      },
      {
        path: "/about",
        name: "about-us",
        component: AboutUs,
        meta: { keepAlive: true },
      },
    ],
    scrollBehavior() {
      document.getElementsById("app").scrollIntoView({ behavior: "smooth" });
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});
export default router;
