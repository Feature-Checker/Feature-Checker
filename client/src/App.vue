<template>
  <div id="app">
    {{ JSON.stringify(process) }}TEST env
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
  data: () => ({
    process: process.env
  }),
};
</script>

<style lang="scss"></style>
