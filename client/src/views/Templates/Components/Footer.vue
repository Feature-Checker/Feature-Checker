<template>
  <footer class="development-footer">
    <div class="wrapper">
      <module-logo />
    </div>
  </footer>
</template>

<script>
import Logo from "@/views/Globals/Logo.vue";
export default {
  components: {
    "module-logo": Logo
  }
};
</script>

<style lang="scss">
.development-footer {
  height: 150px;
  background-color: $clay;
  display: flex;
  align-items: center;
}
</style>
