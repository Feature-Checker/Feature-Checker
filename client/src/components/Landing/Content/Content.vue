<template>
  <main>
    <section-chooseRoad></section-chooseRoad>
    <section-popularTechnology></section-popularTechnology>
    <section-suggestionForm></section-suggestionForm>
  </main>
</template>

<script>
import ChooseRoad from "./Sections/ChooseRoad.vue";
import PopularTech from "./Sections/PopularTech.vue";
import SuggestionForm from "./Sections/SuggestionForm.vue";
export default {
  components: {
    "section-chooseRoad": ChooseRoad,
    "section-popularTechnology": PopularTech,
    "section-suggestionForm": SuggestionForm
  }
};
</script>

<style></style>
