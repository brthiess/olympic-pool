<template>
  <nav>
    <span
      class="hamburger-logo"
      v-on:click="isNavigationOpen = !isNavigationOpen"
    >
      <span class="hamburger">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </span>
      <div class="logo">Logo</div>
    </span>
    <div
      class="navigation-list-container"
      :class="isNavigationOpen ? 'navigation-open' : ''"
    >
      <div
        class="navigation-background"
        @click="isNavigationOpen = false"
      ></div>
      <div class="navigation-list">
        <span
          class="hamburger-logo"
          v-on:click="isNavigationOpen = !isNavigationOpen"
        >
          <span class="hamburger">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </span>
          <div class="logo">Logo</div>
        </span>
        <div class="items">
          <span
            class="leaderboard-nav-item"
            :class="$route.name == 'Account' ? ' active ' : ''"
            ><i class="nav-icon fas fa-user"></i>
            <div class="nav-text">Account</div>
            <router-link class="nav-link" :to="'/account/'"></router-link>
          </span>
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
        </div>
      </div>
    </div>
    <span
      class="leaderboard-nav-item"
      :class="$route.name == 'Account' ? ' active ' : ''"
      ><i class="nav-icon fas fa-user"></i>
      <div class="nav-text">Account</div>
      <router-link class="nav-link" :to="'/account/'"></router-link>
    </span>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      isNavigationOpen: false,
    };
  },
};
</script>

<style scoped lang="less">
.hamburger-logo {
  display: flex;
  align-items: center;
}
.hamburger {
  width: 70px;
  cursor: pointer;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.hamburger-line {
  width: 40px;
  background: #ddd;
  border-radius: 5px;
  height: 3px;
  display: block;
  margin: 4px 0;
}
nav {
  height: 80px;
  width: 100%;
  background: rgb(44, 44, 54);
  border-top: 1px solid #ccc;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #888;
  z-index: 9;
  box-shadow: 0px -2px 20px 10px #ece1cf;
  padding: 0 20px;
}
@media only screen and (min-width: 600px) {
  nav {
    left: calc(50% - 300px);
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
}
.navigation-list-container {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 9;
  display: flex;
  flex-flow: column;
  pointer-events: none;
}
.navigation-list {
  background: #555;
  position: relative;
  z-index: 10;
  transform: translateX(-100%);
  transition: all 0.3s;
  padding: 20px 40px 20px 20px;
  height: 100%;
}
.navigation-background {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
  opacity: 0;
  transition: all 0.3s;
}
.navigation-open {
  &.navigation-list-container {
    pointer-events: initial;
  }
  .navigation-background {
    opacity: 1;
  }
  .navigation-list {
    transform: translateX(0);
  }
}
.items {
  margin-top: 40px;
}
.leaderboard-nav-item {
  display: flex;
  align-items: center;
  font-size: 16px;
  position: relative;
  margin: 20px 0;
  color: #eee;
}
.nav-icon {
  text-align: center;
  color: #888;
  font-size: 18px;
  margin-right: 10px;
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
