<template>
  <div class="sign-in-container">
    <h3 class="login-text">Login</h3>
    <div class="input-container">
      <label>Email</label>
      <div class="icon"><span class="fa fa-email"></span></div>
      <input v-model="email" name="email" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
    };
  },
};
</script>
