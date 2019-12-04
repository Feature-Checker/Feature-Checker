<template>
  <section class="frontend">
    <div class="title">
      <h2>Design</h2>
      <div class="counter">
        <span>{{ $t("landingContent.popularTech.toolCounter") }}</span>
        <span>69</span>
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
    <!-- TODO - Make slider of technology -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      // TODO - Dynamic translation issue https://github.com/Feature-Checker/Feature-Checker/issues/17
      techItem: [
        {
          image: require("@/assets/images/utils/logos/photoshop.svg"),
          title: "Adobe Photoshop",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/figma.svg"),
          title: "Figma",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/illustrator.svg"),
          title: "Illustrator",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/xd.svg"),
          title: "Adobe XD",
          description: this.$i18n.t(
            "landingContent.popularTech.frontend.javascriptDesc"
          )
        },
        {
          image: require("@/assets/images/utils/logos/sketch.svg"),
          title: "Sketch",
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
