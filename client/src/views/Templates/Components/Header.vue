<template>
  <header class="development-header">
    <div class="wrapper name-box">
      <h1>Frontend</h1>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header.development-header {
  height: 50vh;
  width: 100%;
  background-color: #734ae8;
  background-image: linear-gradient(315deg, #734ae8 0%, #89d4cf 74%);

  padding-top: 100px;
  .name-box {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    h1 {
      font-size: 5em;
    }
  }
}
</style>
