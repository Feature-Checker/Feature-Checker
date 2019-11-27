<template>
  <section class="chooseRoad-item left frontend" :class="{ active: isActive }">
    <div class="wrapper">
      <h2>Frontend</h2>
      <!-- TODO - Translacja -->
      <span
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas
        porro eligendi nesciunt sit excepturi fuga, deleniti corrupti quia
        reprehenderit?</span
      >
      <div class="tools-summary" :class="{ active: isActive }">
        <div class="summary-item">
          <p>
            <i class="fas fa-paper-plane"></i>
            {{ $t("landingContent.contentChoose.lastUpdated") }}
          </p>
          <ul>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
          </ul>
        </div>
        <div class="summary-item">
          <p>
            <i class="fas fa-heart"></i>
            {{ $t("landingContent.contentChoose.mostStars") }}
          </p>
          <ul>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
          </ul>
        </div>
        <div class="summary-item">
          <p>
            <i class="fas fa-download"></i>
            {{ $t("landingContent.contentChoose.mostDownloads") }}
          </p>
          <ul>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
            <li>Frontend Name</li>
          </ul>
        </div>
      </div>
      <span
        class="toggleHeight"
        @click="isActive = !isActive"
        :class="{ active: isActive }"
        ><i class="fas fa-chevron-down"></i
      ></span>
      <img src="@/assets/images/utils/vectors/frontend.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
