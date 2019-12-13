<template>
  <div class="translation-form">
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
</template>

<script>
export default {
  data() {
    return {
      toolCategory: "new"
    };
  }
};
</script>

<style></style>
