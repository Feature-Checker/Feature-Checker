<template>
  <nav>
    <div class="nav-content">
      <div class="nav-logo">
        <span>Logo</span>
      </div>
      <ul class="nav-links" :class="{ 'nav-active': navActive }">
        <li>
          <span> {{ $t("menu#1") }} </span>
        </li>
        <li>
          <span> {{ $t("menu#2") }} </span>
        </li>
        <li>
          <span> {{ $t("menu#3") }} </span>
        </li>
        <li>
          <span> {{ $t("menu#4") }} </span>
        </li>
      </ul>
      <LanguageSwitcher />
    </div>

    <div
      class="toggle-menu"
      @click="ToggleMenu"
      v-on-clickaway="NavDropdownHide"
    >
      <i class="fas fa-bars"></i>
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";

import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "Navigation",
  components: {
    LanguageSwitcher
  },
  mixins: [clickaway],
  data() {
    return {
      navActive: false
    };
  },
  methods: {
    ToggleMenu() {
      this.navActive = !this.navActive;
    },
    NavDropdownHide: function() {
      this.navActive = false;
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
  min-height: #{$nav-height};
  .nav-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .nav-logo {
      span {
        color: $white;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 2em;
      }
    }
    .nav-links {
      list-style: none;
      display: flex;
      width: 30%;
      opacity: 1;
      justify-content: space-between;
      font-weight: bold;
      color: $white;
      @include max-dv {
        position: absolute;
        top: #{$nav-height - $nav-height/2};
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
      }
      @include xs {
        width: 70%;
      }
      @include sm {
        width: 70%;
      }
      @include md {
        width: 40%;
      }
      li {
        cursor: pointer;
        span {
          font-family: $lato;
          letter-spacing: 1px;
        }
      }
      &.nav-active {
        @include max-dv {
          visibility: visible;
          opacity: 1;
          transform: translate(-50%, #{$nav-height/1.5});
          transition: all 0.3s;
        }
        @include sm {
          li {
            span {
              font-size: 1.6em;
            }
          }
        }
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
</style>
