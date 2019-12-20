<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
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

<style lang="scss"></style>
