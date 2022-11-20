<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
  </div>
</template>

<script>
import { loadUsers, loadCurrentUser } from "./state/user-state";
import Navigation from "./components/Navigation.vue";
export default {
  name: "Main",
  components: {
    Navigation,
  },
  created() {
    loadUsers();
    loadCurrentUser();
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
</style>
