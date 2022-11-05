<template>
  <div id="app">
    <nav>
      <span
        class="leaderboard-nav-item"
        :class="$route.name == 'Leaderboard' ? ' active ' : ''"
        ><i class="nav-icon fas fa-trophy"></i>
        <div class="nav-text">Leaderboard</div>
        <router-link class="nav-link" :to="'/'"></router-link>
      </span>
      <span
        class="leaderboard-nav-item"
        :class="$route.name == 'Stats' ? ' active ' : ''"
        ><i class="nav-icon fas fa-chart-bar"></i>
        <div class="nav-text">Stats</div>
        <router-link class="nav-link" :to="'/stats/'"></router-link>
      </span>
      <span
        class="leaderboard-nav-item"
        :class="$route.name == 'Rules' ? ' active ' : ''"
        ><i class="nav-icon fas fa-chart-bar"></i>
        <div class="nav-text">Rules</div>
        <router-link class="nav-link" :to="'/rules/'"></router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { loadUsers } from "./state/user-state";
export default {
  name: "Main",
  created() {
    loadUsers();
  },
};
</script>

<style>
* {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  background: #ece1cf;
}
nav {
  position: fixed;
  bottom: 0;
  height: 80px;
  background: white;
  border-top: 1px solid #ccc;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #888;
  z-index: 9;
  box-shadow: 0px -2px 20px 10px #ece1cf;
}
@media only screen and (min-width: 600px) {
  nav {
    max-width: 600px;
    left: calc(50% - 300px);
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
}
.leaderboard-nav-item {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: relative;
}
.nav-icon {
  text-align: center;
  margin-bottom: 5px;
  color: #888;
  font-size: 18px;
}
.leaderboard-nav-item {
  width: 33%;
}
.nav-link {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.active .nav-icon,
.active .nav-text {
  color: #f40e04;
}
</style>
