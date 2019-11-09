<template>
  <div id="app">
    <div
      class="headershape"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eum. Rerum praesentium nihil et. Saepe modi facilis nam commodi velit!</div>
  </div>
</template>

<style lang="scss">
@import "./src/assets/styles/global/global.scss";
div#app {
  .headershape {
    background-image: url(./assets/images/Shapes/HeaderShape.png);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
    width: 100%;
    height: 100vh;
    font-size: $text-size;
  }
}
</style>
