<template>
  <section class="add-tool">
    <div class="form-box">
      <form action>
        <label for>Repo name</label>
        <input type="text" />
        <div class="logo-container">
          <p>Available logos</p>
          <div class="logos">
            <img
              alt
              :src="logo.logoImage"
              v-for="logo in toolLogos"
              @click="handleSelectItem(logo)"
              v-bind:key="logo.id"
              :class="{active: selected == logo.id }"
            />
          </div>
        </div>
        <button class="btn purple">Add Repo</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedLogo: "",
      selected: null,
      toolLogos: [
        {
          id: 1,
          logoImage: require("@/assets/images/utils/logos/vuejs.svg"),
          active: false
        },
        {
          id: 2,
          logoImage: require("@/assets/images/utils/logos/react.svg"),
          active: false
        },
        {
          id: 3,
          logoImage: require("@/assets/images/utils/logos/angular.svg"),
          active: false
        }
      ]
    };
  },
  methods: {
    handleSelectItem(logo) {
      this.selectedLogo = logo.logoImage;
      this.selected = logo.id;
    }
  }
};
</script>

<style lang="scss">
section.add-tool {
  width: 100%;
  height: 100vh;
  background: $navy;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    width: 600px;
    form {
      display: flex;
      flex-direction: column;
      label {
        font-size: 1.6em;
        font-family: $mont;
        color: $froly;
      }
      input {
        background: transparent;
        border: none;
        border-bottom: 1px solid $white;
        font-size: 2em;
        color: $white;
        font-family: $mont;
        margin: 10px 0;
        outline: none;
        padding: 10px 0;
      }
      button {
        margin: 20px auto;
      }
      .logo-container {
        margin: 50px 0;
        p {
          font-size: 1.6em;
          font-family: $mont;
          color: $froly;
          margin-bottom: 20px;
        }
        .logos {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          img {
            width: 15%;
            margin: 10px 20px;
            padding: 10px 15px;
            cursor: pointer;
            transition: 0.2s;
            &.active {
              padding: 10px 15px;
              background: rgba(255, 255, 255, 0.3);
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
}
</style>