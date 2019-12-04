<template>
  <section class="backend">
    <div class="title">
      <h2>Backend</h2>
      <div class="counter">
        <span>{{ $t("landingContent.popularTech.toolCounter") }}</span>
        <span>39</span>
      </div>
    </div>
    <div class="tech-box">
      <div class="tech-item" v-for="item in techItem" :key="item.title">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
        <span>{{ item.description }}</span>
        <button class="btn purple">
          {{ $t("buttonCheck") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // TODO - Dynamic translation issue https://github.com/Feature-Checker/Feature-Checker/issues/17
      techItem: [
        {
          image: require("@/assets/images/utils/logos/java.svg"),
          title: "Java",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/jenkins.svg"),
          title: "Jenkins",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/ember.svg"),
          title: "Ember",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/kotlin.svg"),
          title: "Kotlin",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/nodejs.svg"),
          title: "NodeJS",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        }
      ]
    };
  }
};
</script>

<style></style>
