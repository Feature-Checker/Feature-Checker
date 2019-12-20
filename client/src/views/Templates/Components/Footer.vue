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
  background-color: #20bf55;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  display: flex;
  align-items: center;
}
</style>