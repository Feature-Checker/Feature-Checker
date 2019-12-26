<template>
  <router-link :to="{ name: 'home' }">
    <img src="@/assets/images/logo/dev-logo-white.svg" alt class="logo-desktop" />
    <img src="@/assets/images/logo/dev-sygnet.svg" alt class="logo-mobile" />
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo-desktop {
  width: 200px;
  margin: 5px 20px 5px 0;
  @include max-dv($md - 1) {
    display: none;
  }
}
.logo-mobile {
  width: 35px;
  margin: 5px 20px 5px 0;
  @include min-dv($md) {
    display: none;
  }
}
</style>