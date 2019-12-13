<template>
  <div class="translation-form">
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
</template>

<script>
export default {};
</script>

<style></style>
