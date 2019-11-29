<template>
  <section class="chooseRoad-item right backend" :class="{ active: isActive }">
    <div class="wrapper">
      <div class="title">
        <h2>Backend</h2>
        <!-- TODO - Translacja -->
        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quas porro eligendi nesciunt sit excepturi fuga, deleniti corrupti
          quia reprehenderit?</span
        >
      </div>
      <div class="tools-summary" :class="{ active: isActive }">
        <div class="summary-item">
          <p>
            <i class="fas fa-paper-plane"></i>
            {{ $t("landingContent.contentChoose.lastUpdated") }}
          </p>
          <ul>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
          </ul>
        </div>
        <div class="summary-item">
          <p>
            <i class="fas fa-heart"></i>
            {{ $t("landingContent.contentChoose.mostStars") }}
          </p>
          <ul>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
          </ul>
        </div>
        <div class="summary-item">
          <p>
            <i class="fas fa-download"></i>
            {{ $t("landingContent.contentChoose.mostDownloads") }}
          </p>
          <ul>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
            <li>Backend Name</li>
          </ul>
        </div>
      </div>
      <span
        class="toggleHeight"
        @click="isActive = !isActive"
        :class="{ active: isActive }"
        ><i class="fas fa-chevron-down"></i
      ></span>
      <img src="@/assets/images/utils/vectors/backend.png" alt="" />
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
