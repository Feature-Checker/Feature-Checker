<template>
  <div class="translation-form">
    <p>
      {{ $t("landingContent.contactForm.section-language.header") }}
    </p>
    <div class="category-item">
      <span
        @click="translationCategory = 'new'"
        :class="{ 'trans-active': translationCategory == 'new' }"
        >{{ $t("landingContent.contactForm.section-language.option1") }}</span
      >
      <span
        @click="translationCategory = 'error'"
        :class="{ 'trans-active': translationCategory == 'error' }"
        >{{ $t("landingContent.contactForm.section-language.option2") }}</span
      >
    </div>
    <form class="new-translation" v-if="translationCategory == 'new'">
      <label for="">{{ $t("landingContent.contactForm.form.type") }}</label>
      <input type="text" class="input-padding" />
      <label for="">{{ $t("landingContent.contactForm.form.name") }}</label>
      <input type="text" />
      <label for="">{{ $t("landingContent.contactForm.form.email") }}</label>
      <input type="email" />
      <label for="">{{ $t("landingContent.contactForm.form.message") }}</label>
      <textarea name="" id=""></textarea>
      <button type="submit" class="btn purple">
        <i class="fas fa-envelope"></i>
      </button>
    </form>
    <form class="error-translation" v-else-if="translationCategory == 'error'">
      <label for="">{{ $t("landingContent.contactForm.form.choose") }}</label>
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
      <label for="">{{ $t("landingContent.contactForm.form.name") }}</label>
      <input type="text" />
      <label for="">{{ $t("landingContent.contactForm.form.email") }}</label>
      <input type="email" />
      <label for="">{{ $t("landingContent.contactForm.form.message") }}</label>
      <textarea name="" id=""></textarea>
      <button type="submit" class="btn purple">
        <i class="fas fa-envelope"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      translationCategory: "new",
      selected: null,
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
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-active {
  transition: opacity 0.4s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
