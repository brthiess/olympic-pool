<template>
  <div class="home">
    <Leaderboard :teams="teams" :users="users" />
  </div>
</template>

<script>
// @ is an alias to /src
import Leaderboard from "@/components/Leaderboard.vue";
import store from "../state/user-state";

export default {
  name: "Home",
  components: {
    Leaderboard,
  },
  props: {
    teams: Array,
  },
  data() {
    return {
      users: store.users,
    };
  },
};
</script>
