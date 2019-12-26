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
  background: rgb(46, 53, 83);
  background: linear-gradient(
    90deg,
    rgba(46, 53, 83, 1) 0%,
    rgba(37, 39, 66, 1) 100%
  );

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
