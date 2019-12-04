<template>
  <section class="frontend">
    <div class="title">
      <h2>Frontend</h2>
      <div class="counter">
        <span>{{ $t("landingContent.popularTech.toolCounter") }}</span>
        <span>100</span>
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
          image: require("@/assets/images/utils/logos/javascript.svg"),
          title: "JavaScript",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/vuejs.svg"),
          title: "Vue",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/react.svg"),
          title: "React",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/angular.svg"),
          title: "Angular",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/jquery.svg"),
          title: "jQuery",
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
