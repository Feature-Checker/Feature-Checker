<template>
  <section class="suggestion-form">
    <div class="wrapper">
      <div class="title-box">
        <h2>{{ $t("landingContent.contactForm.title") }}</h2>
        <h4>{{ $t("landingContent.contactForm.subTitle") }}</h4>
      </div>
      <div class="available-topics">
        <span
          @click="showForm = 'language'"
          class="topics-item"
          :class="{ activeItem: showForm == 'language' }"
          >{{ $t("landingContent.contactForm.section-language.name") }}</span
        >
        <span
          @click="showForm = 'tools'"
          class="topics-item"
          :class="{ activeItem: showForm == 'tools' }"
          >{{ $t("landingContent.contactForm.section-tool.name") }}</span
        >
        <span
          @click="showForm = 'general'"
          class="topics-item"
          :class="{ activeItem: showForm == 'general' }"
          >{{ $t("landingContent.contactForm.section-general.name") }}</span
        >
      </div>
      <div class="forms-box">
        <transition name="fade" mode="out-in">
          <Language v-if="showForm == 'language'" key="language" />
          <Tools v-else-if="showForm == 'tools'" key="tools" />
          <General v-else-if="showForm == 'general'" key="general" />
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import Language from "./SuggestionFormItems/Language.vue";
import Tools from "./SuggestionFormItems/Tools.vue";
import General from "./SuggestionFormItems/General.vue";
export default {
  components: {
    Language,
    Tools,
    General
  },
  data() {
    return {
      showForm: "language"
    };
  }
};
</script>

<style lang="scss">
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-active {
  transition: opacity 0.4s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@import "vue-select/src/scss/vue-select.scss";
section.suggestion-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
  .available-topics {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @include max-dv($md - 1) {
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: 30px 0;
    }
    .topics-item {
      cursor: pointer;
      font-size: 1.4em;
      padding: 5px 20px;
      text-transform: uppercase;
      font-family: $mont;
      font-weight: 500;
      color: $navy;
      @include max-dv($md - 1) {
        width: 100%;
        text-align: center;
        padding: 10px 20px;
      }
      &.activeItem {
        background: $navy;
        color: $white;

        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        @include max-dv($md - 1) {
          border-radius: 10px;
        }
      }
    }
  }
  .forms-box {
    .translation-form {
      background: $navy;
      padding: 10px 20px;
      border-radius: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      @include max-dv($md - 1) {
        border-radius: 10px;
      }

      p,
      span,
      label,
      input,
      textarea {
        font-family: $poppins;
        color: $white;
      }
      p {
        text-align: center;
        margin: 10px 0;
        color: $heliotrope;
      }
      .category-item {
        margin: 10px 0 20px 0;
        display: flex;
        justify-content: space-around;
        @include max-dv($md - 1) {
          flex-direction: column;
          align-items: center;
        }
        span {
          cursor: pointer;
          @include max-dv($md - 1) {
            margin: 10px 0;
          }
        }
        .trans-active {
          border-bottom: 1px solid $purpleHeart;
          font-weight: 500;
        }
      }
      form {
        display: flex;
        flex-direction: column;
        ul {
          list-style: none;
          display: flex;
          margin: 8px 0;
          li {
            margin: 0 10px 0 0;
            cursor: pointer;
            padding: 0px 10px;
            &.active {
              background: $froly;
              border-radius: 10px;
              span {
                color: $white;
              }
            }
            span {
              color: $froly;
              font-weight: 500;
            }
          }
        }
        input,
        textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid $purpleMedium;
          outline: none;
          padding: 5px 0;
          resize: none;
          margin-bottom: 10px;
          &.input-padding {
            padding: 7px 0;
          }
        }
        textarea {
          width: 100%;
          height: 50px;
        }
        button {
          display: flex;
          align-items: center;
          position: relative;
          padding: 5px 50px;
          margin: 20px auto 10px auto;
          svg {
            font-size: 2em;
          }
        }
      }
    }
  }
}
</style>
