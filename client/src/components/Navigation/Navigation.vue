<template>
  <nav class="wrapper landingNavigation">
    <div class="nav-content">
      <div class="nav-logo">
        <module-logo />
      </div>
      <!-- <ul class="nav-links" :class="{ 'nav-active': navActive }">
        <router-link to="/" class="link-item">
          <span>{{ $t("menu#1") }}</span>
        </router-link>
        <router-link to="/about" class="link-item">
          <span>{{ $t("menu#2") }}</span>
        </router-link>
        <router-link to="/about" class="link-item">
          <span>{{ $t("menu#3") }}</span>
        </router-link>
        <router-link to="/about" class="link-item">
          <span>{{ $t("menu#4") }}</span>
        </router-link>
      </ul>-->
      <module-langSwitcher class="language-chooser" />
    </div>

    <!-- <div class="toggle-menu" @click="ToggleMenu" v-on-clickaway="NavDropdownHide">
      <i class="fas fa-bars"></i>
    </div>-->
  </nav>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
import Logo from "@/views/Globals/Logo.vue";
// import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "Navigation",
  components: {
    "module-langSwitcher": LanguageSwitcher,
    "module-logo": Logo
  }
  // mixins: [clickaway],
  // data() {
  //   return {
  //     navActive: false
  //   };
  // },
  // methods: {
  //   ToggleMenu() {
  //     this.navActive = !this.navActive;
  //   },
  //   NavDropdownHide: function() {
  //     this.navActive = false;
  //   }
  // }
};
</script>
<style lang="scss">
$nav-height: 8vh;
nav.landingNavigation {
  width: 80%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: #{$nav-height};
  position: absolute;
  z-index: 5;
  .nav-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .nav-logo {
      display: flex;
      align-items: center;
    }
    .nav-links {
      list-style: none;
      display: flex;
      width: 90%;
      opacity: 1;
      justify-content: center;
      font-weight: bold;
      color: $white;
      @mixin positioningNavigation {
        position: absolute;
        top: #{$nav-height - $nav-height/2};
        right: 0;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        flex-direction: column;
        justify-content: inherit;
        align-items: flex-end;
      }
      @include max-dv($md) {
        @include positioningNavigation;
      }

      @include lg {
        @include positioningNavigation;
      }
      @include md {
        @include positioningNavigation;
      }
      @include xl {
        &.wrapper {
          margin: 0 10% 0 0;
        }
      }
      @include xs {
        width: 70%;
        margin-top: 20px;
      }
      @include sm {
        width: 70%;
        margin-top: 20px;
      }
      @include ipad(ipadl) {
        margin-top: 20px;
      }
      .link-item {
        cursor: pointer;
        margin: 0 20px;
        color: $white;
        text-decoration: none;
        @include max-dv($md) {
          margin: 10px 0;
        }
        @include md {
          margin: 10px 0;
        }
        @include lg {
          margin: 10px 0;
        }
        span {
          font-family: $open;
          letter-spacing: 1px;
        }
      }
      &.nav-active {
        @include max-dv($md) {
          visibility: visible;
          opacity: 1;
          transform: translateY(#{$nav-height/4});
          transition: all 0.3s;
        }
        @include md {
          visibility: visible;
          opacity: 1;
          transform: translateY(#{$nav-height/4});
          transition: all 0.3s;
        }
        @include lg {
          visibility: visible;
          opacity: 1;
          transform: translateY(#{$nav-height/4});
          transition: all 0.3s;
        }
        @include sm {
          .link-item {
            span {
              font-size: 1.6em;
            }
          }
        }
      }
    }
    .language-chooser {
      margin: 3px 0 0 0;
      z-index: 2;
      @include max-dv($md) {
        margin: 3px 20px 0px 20px;
      }
      @include ipad(ipadp) {
        margin: 3px 40px 0px 40px;
      }
      @include ipad(ipadl) {
        margin: 3px 40px 0px 40px;
      }
      @include ipad(prop) {
        margin: 3px 40px 0px 40px;
      }
    }
  }
  .toggle-menu {
    display: block;
    font-size: 28px;
    color: $white;
    cursor: pointer;
    @include min-dv($md) {
      display: none;
    }
    @include lg {
      display: block;
    }
    @include md {
      display: block;
    }
  }
}
</style>
