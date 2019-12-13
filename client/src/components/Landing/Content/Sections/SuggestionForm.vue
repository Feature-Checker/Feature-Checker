<template>
  <section class="suggestion-form">
    <div class="wrapper">
      <div class="title-box">
        <h2>Would you like to tell us something?</h2>
        <h4>Choose a conversation topic and contact us!</h4>
      </div>
      <div class="available-topics">
        <span
          @click="showForm = 'language'"
          class="topics-item"
          :class="{ activeItem: showForm == 'language' }"
          >Language translations</span
        >
        <span
          @click="showForm = 'tools'"
          class="topics-item"
          :class="{ activeItem: showForm == 'tools' }"
          >Available tools</span
        >
        <span
          @click="showForm = 'general'"
          class="topics-item"
          :class="{ activeItem: showForm == 'general' }"
          >General</span
        >
      </div>
      <div class="forms-box">
        <div v-if="showForm == 'language'" class="translation-form">
          <p>Choose option</p>
          <div class="category-item">
            <span
              @click="translationCategory = 'new'"
              :class="{ 'trans-active': translationCategory == 'new' }"
              >New translation</span
            >
            <span
              @click="translationCategory = 'error'"
              :class="{ 'trans-active': translationCategory == 'error' }"
              >Error in translation</span
            >
          </div>
          <form class="new-translation" v-if="translationCategory == 'new'">
            <label for="">Type language</label>
            <input type="text" class="input-padding" />
            <label for="">Name</label>
            <input type="text" />
            <label for="">Email</label>
            <input type="email" />
            <label for="">Message</label>
            <textarea name="" id=""></textarea>
            <button type="submit" class="btn purple">
              <i class="fas fa-envelope"></i>
            </button>
          </form>
          <form class="error-translation" v-if="translationCategory == 'error'">
            <label for="">Choose translation</label>
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
            <label for="">Name</label>
            <input type="text" />
            <label for="">Email</label>
            <input type="email" />
            <label for="">Message</label>
            <textarea name="" id=""></textarea>
            <button type="submit" class="btn purple">
              <i class="fas fa-envelope"></i>
            </button>
          </form>
        </div>
        <div v-else-if="showForm == 'tools'" class="translation-form">
          <p>Choose option</p>
          <div class="category-item">
            <span
              @click="toolCategory = 'new'"
              :class="{ 'trans-active': toolCategory == 'new' }"
              >New tool</span
            >
            <span
              @click="toolCategory = 'error'"
              :class="{ 'trans-active': toolCategory == 'error' }"
              >Bug in tool</span
            >
          </div>
          <form action="" v-if="toolCategory == 'new'">
            <label for="">
              Tool name
            </label>
            <input type="text" />
            <label for="">
              Link to Github/Bitbucket
            </label>
            <input type="text" />
            <label for="">
              Name
            </label>
            <input type="text" />
            <label for="">
              Email
            </label>
            <input type="email" />
            <label for="">
              Message
            </label>
            <textarea name="" id=""></textarea>
            <button type="submit" class="btn purple">
              <i class="fas fa-envelope"></i>
            </button>
          </form>
          <form action="" v-if="toolCategory == 'error'">
            <label for="">
              Repo name
            </label>
            <input type="text" />
            <label for="">
              Link to tool
            </label>
            <input type="text" />
            <label for="">
              Name
            </label>
            <input type="text" />
            <label for="">
              Email
            </label>
            <input type="email" />
            <label for="">
              Message
            </label>
            <textarea name="" id=""></textarea>
            <button type="submit" class="btn purple">
              <i class="fas fa-envelope"></i>
            </button>
          </form>
        </div>
        <div v-else-if="showForm == 'general'" class="translation-form">
          <p>Send Us whatever you want</p>
          <form action="" v-if="toolCategory == 'new'">
            <label for="">
              Name
            </label>
            <input type="text" />
            <label for="">
              Email
            </label>
            <input type="email" />
            <label for="">
              Title
            </label>
            <input type="text" />
            <label for="">
              Message
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
      showForm: "",
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
