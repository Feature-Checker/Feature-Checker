<template>
  <div id="app">
    {{ environment }}
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";

const environment = `${process.env.ENVIRONMENT} env`;

export default {
  components: {
    Navigation
  },
  data: () => ({
    environment
  }),
};
</script>

<style lang="scss"></style>
