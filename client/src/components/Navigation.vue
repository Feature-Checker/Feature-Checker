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
    </div>
    <div>
      <multiselect
        v-model="value"
        placeholder=""
        label="title"
        track-by="title"
        :options="options"
        :option-height="104"
        :custom-label="customLabel"
        :show-labels="false"
        :preselectFirst="true"
      >
        <template slot="singleLabel" slot-scope="props">
          <img class="option__image" :src="props.option.img" />
          <span class="option__title">{{ props.option.title }}</span>
        </template>
        <template slot="option" slot-scope="props">
          <img class="option__image" :src="props.option.img" />
          <div class="option__desc">
            <span class="option__title">{{ props.option.title }}</span>
          </div>
        </template>
      </multiselect>
    </div>
    <div class="toggle-menu" @click="ToggleMenu">
      <i class="fas fa-bars"></i>
    </div>
  </nav>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "Navigation",
  components: {
    Multiselect
  },
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
    },
    customLabel({ title, desc }) {
      return `${title} – ${desc}`;
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
        top: calc($nav-height - $nav-height/2);
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
          transform: translate(-50%, $nav-height/1.5);
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

.multiselect__option {
  display: flex !important;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .option__title {
    font-weight: normal;
  }
}
.multiselect__single {
  display: flex !important;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .option__title {
    font-size: 16px;
    font-weight: bold;
    color: $navy;
  }
}

.multiselect {
  width: 100px;
}
</style>
