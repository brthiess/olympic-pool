<template>
  <div class="account-container">
    <div v-if="currentUser.loaded">
      <div v-if="currentUser.signedIn" class="signed-in-container"></div>
      <div v-else class="signed-out-container"><sign-in></sign-in></div>
    </div>
    <div v-else class="skeleton">Loading...</div>
  </div>
</template>

<script>
import store, { loadCurrentUser } from "../state/user-state";
import SignIn from "../components/SignIn.vue";
export default {
  name: "Account",
  components: {
    SignIn,
  },
  created() {
    loadCurrentUser();
  },
  data() {
    return {
      currentUser: store.currentUser,
    };
  },
};
</script>
