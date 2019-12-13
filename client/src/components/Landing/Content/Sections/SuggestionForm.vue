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
        <div v-if="showForm == 'language'" class="translation-form">
          <p>{{ $t("landingContent.contactForm.section-language.header") }}</p>
          <div class="category-item">
            <span
              @click="translationCategory = 'new'"
              :class="{ 'trans-active': translationCategory == 'new' }"
              >{{
                $t("landingContent.contactForm.section-language.option1")
              }}</span
            >
            <span
              @click="translationCategory = 'error'"
              :class="{ 'trans-active': translationCategory == 'error' }"
              >{{
                $t("landingContent.contactForm.section-language.option2")
              }}</span
            >
          </div>
          <form class="new-translation" v-if="translationCategory == 'new'">
            <label for="">{{
              $t("landingContent.contactForm.form.type")
            }}</label>
            <input type="text" class="input-padding" />
            <label for="">{{
              $t("landingContent.contactForm.form.name")
            }}</label>
            <input type="text" />
            <label for="">{{
              $t("landingContent.contactForm.form.email")
            }}</label>
            <input type="email" />
            <label for="">{{
              $t("landingContent.contactForm.form.message")
            }}</label>
            <textarea name="" id=""></textarea>
            <button type="submit" class="btn purple">
              <i class="fas fa-envelope"></i>
            </button>
          </form>
          <form class="error-translation" v-if="translationCategory == 'error'">
            <label for="">{{
              $t("landingContent.contactForm.form.choose")
            }}</label>
            <ul>
              <li
                v-for="item in languages"
                :key="item.name"
                @click="handleSelectItem(item)"
                :class="{ active: selected == item.id }"
              >
                <span>{{ item.name }}</span>
              </li>
            </ul>
            <label for="">{{
              $t("landingContent.contactForm.form.name")
            }}</label>
            <input type="text" />
            <label for="">{{
              $t("landingContent.contactForm.form.email")
            }}</label>
            <input type="email" />
            <label for="">{{
              $t("landingContent.contactForm.form.message")
            }}</label>
            <textarea name="" id=""></textarea>
            <button type="submit" class="btn purple">
              <i class="fas fa-envelope"></i>
            </button>
          </form>
        </div>
        <div v-else-if="showForm == 'tools'" class="translation-form">
          <p>{{ $t("landingContent.contactForm.section-tool.header") }}</p>
          <div class="category-item">
            <span
              @click="toolCategory = 'new'"
              :class="{ 'trans-active': toolCategory == 'new' }"
              >{{ $t("landingContent.contactForm.section-tool.option1") }}</span
            >
            <span
              @click="toolCategory = 'error'"
              :class="{ 'trans-active': toolCategory == 'error' }"
              >{{ $t("landingContent.contactForm.section-tool.option2") }}</span
            >
          </div>
          <form action="" v-if="toolCategory == 'new'">
            <label for="">
              {{ $t("landingContent.contactForm.form.tool-name") }}
            </label>
            <input type="text" />
            <label for="">
              {{ $t("landingContent.contactForm.form.link-to-repo") }}
            </label>
            <input type="text" />
            <label for="">
              {{ $t("landingContent.contactForm.form.name") }}
            </label>
            <input type="text" />
            <label for="">
              {{ $t("landingContent.contactForm.form.email") }}
            </label>
            <input type="email" />
            <label for="">
              {{ $t("landingContent.contactForm.form.message") }}
            </label>
            <textarea name="" id=""></textarea>
            <button type="submit" class="btn purple">
              <i class="fas fa-envelope"></i>
            </button>
          </form>
          <form action="" v-if="toolCategory == 'error'">
            <label for="">
              {{ $t("landingContent.contactForm.form.repo-name") }}
            </label>
            <input type="text" />
            <label for="">
              {{ $t("landingContent.contactForm.form.link-to-tool") }}
            </label>
            <input type="text" />
            <label for="">
              {{ $t("landingContent.contactForm.form.name") }}
            </label>
            <input type="text" />
            <label for="">
              {{ $t("landingContent.contactForm.form.email") }}
            </label>
            <input type="email" />
            <label for="">
              {{ $t("landingContent.contactForm.form.message") }}
            </label>
            <textarea name="" id=""></textarea>
            <button type="submit" class="btn purple">
              <i class="fas fa-envelope"></i>
            </button>
          </form>
        </div>
        <div v-else-if="showForm == 'general'" class="translation-form">
          <p>{{ $t("landingContent.contactForm.section-general.header") }}</p>
          <form action="">
            <label for="">
              {{ $t("landingContent.contactForm.form.name") }}
            </label>
            <input type="text" />
            <label for="">
              {{ $t("landingContent.contactForm.form.email") }}
            </label>
            <input type="email" />
            <label for="">
              {{ $t("landingContent.contactForm.form.title") }}
            </label>
            <input type="text" />
            <label for="">
              {{ $t("landingContent.contactForm.form.message") }}
            </label>
            <textarea name="" id=""></textarea>
            <button type="submit" class="btn purple">
              <i class="fas fa-envelope"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      translationCategory: "new",
      toolCategory: "new",
      showForm: "language",
      languages: [
        {
          id: "1",
          name: "EN"
        },
        {
          id: "2",
          name: "PL"
        }
      ]
    };
  },
  methods: {
    handleSelectItem(item) {
      this.selected = item.id;
    }
  }
};
</script>

<style lang="scss">
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
