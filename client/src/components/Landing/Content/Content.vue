<template>
  <main>
    <section-chooseRoad></section-chooseRoad>
    <section-popularTechnology></section-popularTechnology>
  </main>
</template>

<script>
import ChooseRoad from "./Sections/ChooseRoad.vue";
import PopularTech from "./Sections/PopularTech.vue";
export default {
  components: {
    "section-chooseRoad": ChooseRoad,
    "section-popularTechnology": PopularTech
  }
};
</script>

<style></style>
