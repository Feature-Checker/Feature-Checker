<template>
  <div>
    <landing-header></landing-header>
    <landing-content></landing-content>
  </div>
</template>

<script>
import Header from "./Header/Header.vue";
import Content from "./Content/Content.vue";

export default {
  components: {
    "landing-header": Header,
    "landing-content": Content
  }
};
</script>

<style></style>
