<template>
  <section class="choose-road">
    <div class="title-box">
      <h2>{{ $t("landingContent.contentChoose.title") }}</h2>
      <h4>
        {{ $t("landingContent.contentChoose.subtitle") }}
      </h4>
    </div>
    <section-Frontend></section-Frontend>
    <section-Backend></section-Backend>
    <section-Design></section-Design>
  </section>
</template>

<script>
import Frontend from "./Frontend.vue";
import Backend from "./Backend.vue";
import Design from "./Design.vue";
export default {
  components: {
    "section-Frontend": Frontend,
    "section-Backend": Backend,
    "section-Design": Design
  }
};
</script>

<style lang="scss">
$itemContentPadding: 10px;

section.choose-road {
  min-height: 100vh;
  .title-box {
    margin-bottom: 50px;
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
}
section.chooseRoad-item {
  &.left,
  &.right {
    width: 100%;
    position: relative;
    height: 450px;
    @include max-dv($md - 1) {
      height: 150px;
      transition: 0.5s;
      margin: 50px 0;
      &.active {
        height: 700px;
      }
    }
    @include ipad(ipadp) {
      height: 300px;
    }
    h2 {
      font-size: 32px;
      color: $navy;
      font-family: $mont;
      @include max-dv($md - 1) {
        text-align: center;
      }
      @include ipad(ipadp) {
        text-align: center;
      }
    }
    span {
      display: block;
      width: 50%;
      font-size: 14px;
      color: $navy;
      opacity: 0.8;
      @include max-dv($md - 1) {
        width: 100%;
        text-align: center;
      }
      @include ipad(ipadp) {
        width: 100%;
        text-align: center;
      }
    }
    .tools-summary {
      width: 50%;
      display: flex;
      justify-content: space-between;
      padding-left: 25px;
      @include max-dv($md - 1) {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        padding-left: 0;
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
        &.active {
          visibility: visible;
          opacity: 1;
        }
      }
      @include ipad(ipadp) {
        width: 100%;
      }
      .summary-item {
        margin-top: 20px;
        @include max-dv($md - 1) {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        p {
          font-family: $mont;
          font-weight: 500;
          margin-bottom: 10px;
          position: relative;
          svg {
            position: absolute;
            top: 45%;
            left: -25px;
            transform: translateY(-50%);
            &.fa-download {
              color: $azure;
            }
            &.fa-heart {
              color: $froly;
            }
            &.fa-paper-plane {
              color: $sunglow;
            }
          }
        }
        ul {
          list-style: none;
          li {
            margin: 5px 0;
            font-size: 12px;
          }
        }
      }
    }
    img {
      display: inherit;
      position: absolute;
      top: -30px;
      right: 0;
      transform: rotateY(180deg);
      width: 500px;
      @include max-dv($lg) {
        display: none;
      }
    }
  }
  &.right {
    @include max-dv($md - 1) {
      height: 150px;
      transition: 0.5s;
      &.active {
        height: 700px;
      }
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      @include max-dv($md - 1) {
        align-items: inherit;
      }
      .title {
        width: 50%;
        span {
          width: 100%;
        }
        @include max-dv($md - 1) {
          width: 100%;
        }
        @include ipad(ipadp) {
          width: 100%;
        }
      }
    }
    .item-title {
      width: 50%;
      @include max-dv($md - 1) {
        width: 100%;
      }
      span {
        width: 100%;
      }
    }
    img {
      display: inherit;
      position: absolute;
      top: -80px;
      left: 0;
      transform: rotateY(180deg);
      width: 500px;
      @include max-dv($lg) {
        display: none;
      }
    }
  }
  span.toggleHeight {
    @include min-dv($md) {
      display: none;
    }
    transform: translateY(-580px);
    transition: 0.5s;
    svg {
      font-size: 26px;
      transition: 0.5s;
    }
    &.active {
      transform: translateY(0px);
      svg {
        transform: rotateX(180deg);
      }
    }
  }
}
</style>
