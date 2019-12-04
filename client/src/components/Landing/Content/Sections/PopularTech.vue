<template>
  <section class="popularTechnology">
    <div class="wrapper">
      <div class="title-box">
        <h2>{{ $t("landingContent.popularTech.title") }}</h2>
        <h4>
          {{ $t("landingContent.popularTech.subtitle") }}
        </h4>
      </div>
      <module-frontend></module-frontend>
      <module-backend></module-backend>
      <module-design></module-design>
    </div>
  </section>
</template>

<script>
import Frontend from "./PopularTechItems/Frontend.vue";
import Backend from "./PopularTechItems/Backend.vue";
import Design from "./PopularTechItems/Design.vue";

export default {
  components: {
    "module-frontend": Frontend,
    "module-backend": Backend,
    "module-design": Design
  }
};
</script>

<style lang="scss">
section.popularTechnology {
  min-height: 100vh;
  margin-top: 50px;
  .title-box {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 3em;
    }
    h2,
    h4 {
      color: $navy;
      text-align: center;
    }
    h4 {
      font-size: 16px;
      font-weight: 400;
      margin: 20px 0 0 0;
    }
  }
  .frontend,
  .backend {
    margin: 40px 0;
    .title {
      display: flex;
      align-items: center;
      h2 {
        font-size: 3.6em;
        color: $navy;
      }
      .counter {
        border: 1px solid $gray;
        color: $navy;
        font-weight: 600;
        padding: 3px 10px;
        margin-left: 20px;
        span {
          font-size: 1.2em;
        }
      }
    }
    .tech-box {
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;
      .tech-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(20% - 20px);
        margin: 0 10px;
        border: 1px solid $gray;
        border-radius: 5px;
        padding: 15px 20px;
        @include max-dv($md - 1) {
          width: 100%;
          margin: 10px 0;
        }
        @include min-dv($md - 1) {
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
        @include ipad(ipadp) {
          width: calc(50% - 20px);
          margin: 10px 10px;
        }
        img {
          width: 100px;
          height: 130px;
        }
        p {
          margin: 10px 0;
          font-size: 2em;
          font-weight: 600;
          font-family: $mont;
          color: $clay;
        }
        span {
          font-family: $open;
          text-align: center;
          font-size: 1.4em;
        }
        button {
          margin-top: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
