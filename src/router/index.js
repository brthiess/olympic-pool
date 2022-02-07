import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Rules from "../views/Rules.vue";
import Stats from "../views/Stats.vue";

Vue.use(VueRouter);

const teams = [
  {
    name: "Canada",
    gender: "male",
    subName: "Gushue",
    image: "canada.png",
    pointsPerWin: 1.0,
    wins: 0,
    id: 1,
  },
  {
    name: "Great Britain",
    subName: "Mouat",
    gender: "male",
    image: "gb.png",
    pointsPerWin: 1.0,
    wins: 0,
    id: 2,
  },
  {
    name: "Switzerland",
    subName: "de Cruz",
    gender: "male",
    image: "switzerland.png",
    pointsPerWin: 1.3,
    wins: 0,
    id: 3,
  },
  {
    name: "Sweden",
    subName: "Edin",
    gender: "male",
    image: "sweden.png",
    pointsPerWin: 1.1,
    wins: 0,
    id: 4,
  },
  {
    name: "USA",
    subName: "Shuster",
    gender: "male",
    image: "usa.png",
    pointsPerWin: 1.5,
    wins: 0,
    id: 5,
  },
  {
    name: "Norway",
    subName: "Walstad",
    gender: "male",
    image: "norway.png",
    pointsPerWin: 1.8,
    wins: 0,
    id: 6,
  },
  {
    name: "Italy",
    subName: "Retornaz",
    gender: "male",
    image: "italy.png",
    pointsPerWin: 1.7,
    wins: 0,
    id: 7,
  },
  {
    name: "Russia",
    subName: "Glukhov",
    gender: "male",
    image: "russia.png",
    pointsPerWin: 2.0,
    wins: 0,
    id: 8,
  },
  {
    name: "Denmark",
    subName: "Krause",
    gender: "male",
    image: "denmark.png",
    pointsPerWin: 2.3,
    wins: 0,
    id: 9,
  },
  {
    name: "China",
    subName: "Ma",
    gender: "male",
    image: "china.png",
    pointsPerWin: 3,
    wins: 0,
    id: 10,
  },
  {
    name: "Canada",
    subName: "Jones",
    gender: "female",
    image: "canada.png",
    pointsPerWin: 1.3,
    wins: 0,
    id: 11,
  },
  {
    name: "Sweden",
    subName: "Hasselborg",
    gender: "female",
    image: "sweden.png",
    pointsPerWin: 1.0,
    wins: 0,
    id: 12,
  },
  {
    name: "Switzerland",
    subName: "Tirinzoni",
    gender: "female",
    image: "switzerland.png",
    pointsPerWin: 1.1,
    wins: 0,
    id: 13,
  },
  {
    name: "Great Britain",
    subName: "Muirhead",
    gender: "female",
    image: "gb.png",
    pointsPerWin: 1.4,
    wins: 0,
    id: 14,
  },
  {
    name: "Korea",
    subName: "Kim",
    gender: "female",
    image: "korea.png",
    pointsPerWin: 1.9,
    wins: 0,
    id: 15,
  },
  {
    name: "Japan",
    subName: "Fujisawa",
    gender: "female",
    image: "japan.png",
    pointsPerWin: 1.8,
    wins: 0,
    id: 16,
  },
  {
    name: "China",
    subName: "Han",
    gender: "female",
    image: "china.png",
    pointsPerWin: 2.5,
    wins: 0,
    id: 17,
  },
  {
    name: "Russia",
    subName: "Kovaleva",
    gender: "female",
    image: "russia.png",
    pointsPerWin: 1.7,
    wins: 0,
    id: 18,
  },
  {
    name: "Denmark",
    subName: "Dupont",
    gender: "female",
    image: "denmark.png",
    pointsPerWin: 3.0,
    wins: 0,
    id: 19,
  },
  {
    name: "USA",
    subName: "Peterson",
    gender: "female",
    image: "usa.png",
    pointsPerWin: 2.0,
    wins: 0,
    id: 20,
  },
];
const users = [
  {
    teamName: "Up Your Arsenault",
    realName: "",
    picks: [6, 11, 16, 8, 1, 14],
    img: "rock.png",
    id: 1,
  },
];

const routes = [
  {
    path: "/",
    name: "Leaderboard",
    component: Home,
    props: { users, teams },
  },
  {
    path: "/player/:id",
    name: "Player",
    component: About,
    props: { users, teams },
  },
  {
    path: "/stats/",
    name: "Stats",
    component: Stats,
    props: { users, teams },
  },
  {
    path: "/rules/",
    name: "Rules",
    component: Rules,
    props: { users, teams },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
