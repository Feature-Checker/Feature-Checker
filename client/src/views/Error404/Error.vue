<template>
  <section class="error-page">
    <img
      src="@/assets/images/utils/shapes/404.png"
      alt=""
      class="background-shapes"
    />
    <h2>404</h2>
    <h4>{{ $t("error-page.errorSubTitle") }}</h4>
    <p>{{ $t("error-page.errorAction") }}</p>
    <router-link :to="{ name: 'home' }">
      <button class="btn purple">{{ $t("error-page.button") }}</button>
    </router-link>
  </section>
</template>

<script>
export default {
  created() {
    document.title = "Dev Release | 404";
  }
};
</script>

<style lang="scss">
.error-page {
  width: 100vw;
  height: 100vh;
  background: url("~@/assets/images/background/404.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .background-shapes {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    @include max-dv($md) {
      width: 100%;
      top: 50%;
      left: 0;
      transform: translateX(0);
      transform: translateY(-80%);
    }
    @include min-dv($md + 1) {
      top: 50%;
      transform: translateY(-80%);
    }
    @include min-dv($xl) {
      width: 100%;
    }
  }
  h2,
  h4,
  p,
  button,
  a {
    z-index: 1;
  }
  h2 {
    font-size: 30em;
    font-family: $mont;
    background: linear-gradient(90deg, #9255ee 0%, #6a23a5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @include max-dv($md) {
      font-size: 10em;
    }
  }
  h4 {
    font-family: $mont;
    margin-top: 20px;

    @include xs {
      font-size: 1.6em;
    }
  }
  p {
    width: 30%;
    text-align: center;
    margin: 10px 0 50px 0;
    color: #dfdfdf;
    font-family: $poppins;
    @include max-dv($md) {
      width: 80%;
    }
    @include min-dv($md + 1) {
      width: 80%;
    }
    @include min-dv($xl) {
      width: 30%;
    }
    @include xs {
      font-size: 1.2em;
    }
  }
}
</style>
