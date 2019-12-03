<template>
  <div id="app">
  TEST ENV
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import axios from 'axios'

export default {
  components: {
    Navigation
  },
  data: () => ({}),
  mounted() {
    //example api request
        axios
          .get('/api/repositories')
          .then(results => console.log(results))
          .catch(err => console.error(err))
  }
};
</script>

<style lang="scss"></style>
