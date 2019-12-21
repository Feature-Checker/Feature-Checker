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
  },
  mounted: function() {
    const next = document.querySelector(".frontend .owl-next");
    const prev = document.querySelector(".frontend .owl-prev");
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
