<template>
  <nav>
    <div class="nav-content">
      <div class="nav-logo">
        <span>Logo</span>
      </div>
      <ul class="nav-links" :class="{ 'nav-active': navActive }">
        <li><span>Menu</span></li>
        <li><span>Menu</span></li>
        <li><span>Menu</span></li>
        <li><span>Menu</span></li>
      </ul>
      <div class="select-language">
        asd
        <ul>
          <li>EN</li>
          <li>PL</li>
        </ul>
      </div>
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
      navActive: false,
      value: {
        title: "EN",
        img: "https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg"
      },
      options: [
        {
          title: "EN",
          img: "https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg"
        },
        {
          title: "PL",
          img: "https://lipis.github.io/flag-icon-css/flags/4x3/pl.svg"
        }
      ]
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
    select {
      background: transparent;
      border: none;
      font-size: 1.6em;
      color: $white;
      font-weight: bold;
      option {
        background: transparent;
      }
      option[value="EN"] {
        font-size: 3em;
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
