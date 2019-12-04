<template>
  <div>
    <landing-header></landing-header>
    <landing-content></landing-content>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import Header from "./Header/Header.vue";
import Content from "./Content/Content.vue";
import Footer from "./Footer/Footer.vue";
export default {
  components: {
    "landing-header": Header,
    "landing-content": Content,
    "landing-footer": Footer
  }
};
</script>

<style></style>
