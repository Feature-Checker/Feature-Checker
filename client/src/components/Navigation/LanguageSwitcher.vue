<template>
  <div class="select-language" v-on-clickaway="LangDropdownHide" @click="ToggleLang">
    <span :class="{ active: langActive }">
      {{ $i18n.locale }}
      <i class="fas fa-caret-down"></i>
    </span>

    <ul :class="{ 'lang-active': langActive }">
      <li v-for="lang in languages" :key="lang.title" @click.prevent="setLocale(lang.title)">
        <img :src="lang.flag" alt />
        {{ lang.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      langActive: false,
      languages: [
        {
          title: "en",
          flag: require("@/assets/images/utils/flags/us.svg")
        },
        {
          title: "pl",
          flag: require("@/assets/images/utils/flags/pl.svg")
        }
      ]
    };
  },
  mixins: [clickaway],
  methods: {
    ToggleLang() {
      this.langActive = !this.langActive;
    },
    LangDropdownHide: function() {
      this.langActive = false;
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      });
    }
  }
};
</script>

<style lang="scss">
.select-language {
  position: relative;
  font-size: 1.2em;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    color: $white;
    text-transform: uppercase;
    font-size: 1.2em;
    font-family: $mont;
    font-weight: bold;
    .svg-inline--fa {
      margin-left: 10px;
      font-size: 1.2em;
      transition: 0.3s;
    }
    &.active {
      .svg-inline--fa {
        transform: rotateX(180deg);
      }
    }
  }
  ul {
    position: absolute;
    left: 0;
    transform: translateY(-30px);
    // transform: translateX(-50%);
    color: $white;
    list-style: none;
    visibility: hidden;
    opacity: 0;
    cursor: pointer;
    transition: 0.3s;
    &.lang-active {
      visibility: visible;
      opacity: 1;
      transition: 0.3s;
      transform: translateY(0);
    }
    li {
      display: flex;
      align-items: center;
      font-size: 1.4em;
      margin: 10px 0;
      font-weight: bold;
      transition: 0.3s;
      text-transform: uppercase;
      font-family: $mont;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 10px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
