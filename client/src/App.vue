<template>
  <header>
    <div class="wrapper">
      <Navigation />
    </div>
  </header>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";

export default {
  components: {
    Navigation
  },
  data: () => ({})
};
</script>

<style lang="scss">
header {
  height: 100vh;
  width: 100%;
  background: url("./assets/images/background/lp-header-bg.png");
  background-size: cover;
  background-position: center -200px;
  background-repeat: no-repeat;
}
</style>
