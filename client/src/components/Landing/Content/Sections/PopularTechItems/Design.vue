<template>
  <section class="design">
    <div class="title">
      <h2>Design</h2>
      <div class="counter">
        <span>{{ $t("landingContent.popularTech.toolCounter") }}</span>
        <span>69</span>
      </div>
    </div>
    <div class="tech-box">
      <carousel
        :items="3"
        :loop="true"
        :nav="true"
        :autoplay="false"
        :autoplayHoverPause="true"
        :responsive="{
          0: { items: 1, nav: false },
          768: { items: 2, nav: false },
          1100: { items: 3, nav: true }
        }"
      >
        <div class="tech-item" v-for="item in techItem" :key="item.title">
          <img :src="item.image" alt="" />
          <p>{{ item.title }}</p>
          <span>{{ item.description }}</span>
          <a class="btn purple">
            {{ $t("buttonCheck") }}
          </a>
        </div>
      </carousel>
    </div>
    <!-- TODO - Make slider of technology -->
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
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
  },
  mounted: function() {
    const next = document.querySelector(".design .owl-next");
    const prev = document.querySelector(".design .owl-prev");
    next.innerHTML = `
    <i class="fas fa-chevron-right"></i>
    `;
    prev.innerHTML = `
    <i class="fas fa-chevron-left"></i>
    `;
  }
};
</script>

<style></style>
