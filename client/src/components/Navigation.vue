<template>
  <nav>
    <div class="nav-content">
      <div class="nav-logo">
        <img src="@/assets/images/logos/example.png" alt="" />
      </div>
      <ul
        class="nav-links"
        :class="{ 'nav-active': navActive }"
        v-if="navActive"
      >
        <li><span>Menu</span></li>
        <li><span>Menu</span></li>
        <li><span>Menu</span></li>
        <li><span>Menu</span></li>
      </ul>
    </div>
    <div class="toggle-menu" @click="ToggleMenu">
      <i class="fas fa-bars"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navActive: false
    };
  },
  methods: {
    ToggleMenu() {
      this.navActive = !this.navActive;
    }
  }
};
</script>

<style lang="scss">
$nav-height: 8vh;
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: $nav-height;
  .nav-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .nav-logo {
      img {
        width: 300px;
      }
    }
    .nav-links {
      list-style: none;
      display: flex;
      width: 30%;
      justify-content: space-between;
      font-weight: bold;
      color: $white;
      @include max-dv {
        position: absolute;
        top: $nav-height;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: all 10.3s;
      }
      @include md {
        width: 40%;
      }
      li {
        span {
          font-family: $lato;
          letter-spacing: 1px;
        }
      }
      &.nav-active {
        opacity: 1;
        transition: all 10.3s;
      }
    }
  }
  .toggle-menu {
    display: block;
    font-size: 28px;
    color: $white;
    cursor: pointer;
    @include min-dv {
      display: none;
    }
  }
}

// .slide-fade-enter-active,
// .slide-fade-leave-active {
//   transform: translate(50px, 100px);
//   transition: all 0.3s ease;
// }

// .slide-fade-enter,
// .slide-fade-leave-to {
//   opacity: 0;
// }
</style>
