<template>
  <div class="shimmer-container">
    <div class="shimmer"></div>
  </div>
</template>

<script>
export default {
  name: "Shimmer",
};
</script>

<style scoped>
.shimmer-container {
  width: 100%;
  height: 100%;
}
.shimmer {
  width: 100%;
  height: 100%;
  background: #b8b8b8;
  background-image: linear-gradient(
    to right,
    #b8b8b8 0%,
    #edeef1 20%,
    #b8b8b8 40%,
    #b8b8b8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  border-radius: 10px;

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
}

@keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}
</style>
