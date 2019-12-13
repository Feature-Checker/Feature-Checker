<template>
  <section class="error-page">
    <h2>{ 404 }</h2>
    <h4>{{$t("error-page.errorSubTitle")}}</h4>
    <p>{{$t("error-page.errorAction")}}</p>
    <router-link to="/">
      <button class="btn purple">{{$t("error-page.button")}}</button>
    </router-link>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.error-page {
  width: 100vw;
  height: 100vh;
  background: url("~@/assets/images/background/404.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2,
  h4,
  p {
    font-family: $mont;
  }
  h2 {
    font-size: 12em;
    color: $purpleHeart;
    margin: 20px 0;
  }
  h4 {
    margin: 0 0 50px 0;
  }
  p {
    margin: 10px 0;
    color: $white;
  }
}
</style>