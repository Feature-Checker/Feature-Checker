<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Landing/Header/Header.vue";
import axios from 'axios'

export default {
  components: {
    Header
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
