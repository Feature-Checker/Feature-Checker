<template>
  <nav>
    <div class="nav-content">
      <div class="nav-logo">
        <p>Logo</p>
        <LanguageSwitcher class="language-chooser" />
      </div>
      <ul class="nav-links wrapper" :class="{ 'nav-active': navActive }">
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
      </ul>
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
      display: flex;
      align-items: center;
      p {
        color: $white;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 2em;
        margin: 0 20px 0 0;
      }
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
      }
      @include sm {
        width: 70%;
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
