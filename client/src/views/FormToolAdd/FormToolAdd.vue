<template>
  <section class="add-tool">
    <div class="form-box wrapper">
      <form action onSubmit="return false;">
        <label for>{{$t("addTool-page.repoSearchLabel")}}</label>
        <input type="text" id="startAnimation" />
        <button type="button" class="btn purple" @click=" searchValidation(); imageSearch()">
          <i class="fas fa-search"></i>
        </button>
        <LoadingIcon />
        <div class="logo-container">
          <p>{{$t("addTool-page.logoTitle")}}</p>
          <div class="logos">
            <img
              alt
              :src="logo.logoImage"
              v-for="logo in toolLogos"
              @click="handleSelectItem(logo)"
              v-bind:key="logo.id"
              :class="{ active: selected == logo.id }"
            />
          </div>
        </div>
        <button class="btn purple">{{$t("addTool-page.button")}}</button>
      </form>
    </div>
  </section>
</template>

<script>
import LoadingIcon from "@/components/Globals/LoadingIcon.vue";

export default {
  components: {
    LoadingIcon
  },
  data() {
    return {
      selectedLogo: "",
      selected: null,
      repoImages: [],
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
    },
    imageSearch() {
      const axios = require("axios");
      const input = document.getElementById("startAnimation");
      const isUrlValid = async () => {
        try {
          if ([...input.value].filter(sign => sign === "/").length > 0) {
            const [owner, reponame] = input.value.split("/");
            input.value = `${owner}/${reponame}`;
          } else {
            throw { isValid: false };
          }
          const result = await axios.get("/api/image", {
            params: {
              search: input.value
            }
          });
          console.log(result.data);
          for (let i = 0; i < result.data.length; i++) {
            this.repoImages.push(result.data(i));
            console.log(this.repoImages);
          }
          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      };
      isUrlValid();
    },
    searchValidation() {
      const axios = require("axios");
      const input = document.getElementById("startAnimation");
      const animationDiv = document.querySelector("#lds-ring");
      const isUrlValid = async () => {
        try {
          if ([...input.value].filter(sign => sign === "/").length > 0) {
            const [owner, reponame] = input.value.split("/");
            input.value = `${owner}/${reponame}`;
          } else {
            throw { isValid: false };
          }
          const result = await axios.get("/api/searchrepo", {
            params: {
              reponame: input.value
            }
          });
          console.log(result.data.isValid);
          if (result.data.isValid) {
            input.classList.add("searchSuccess");
            input.classList.remove("searchError");
            animationDiv.classList.remove("activeAnimation");
          } else {
            input.classList.remove("searchSuccess");
            input.classList.add("searchError");
          }

          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      };
      isUrlValid();
    }
  },
  created() {
    document.title = "Dev Release | Add Tool";
  }
};
</script>

<style lang="scss">
section.add-tool {
  width: 100%;
  min-height: 100vh;
  background: $navy;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    width: 100%;
    @include max-dv($md) {
      width: 80%;
    }
    @include ipad(ipadl) {
      width: 60%;
    }
    @include ipad(prop) {
      width: 60%;
    }
    @include ipad(prol) {
      width: 60%;
    }
    @include land-sm {
      margin-top: 150px;
    }
    form {
      display: flex;
      flex-direction: column;
      position: relative;
      label {
        font-size: 1.6em;
        font-family: $mont;
        color: $froly;
      }
      input {
        background: transparent;
        border: none;
        border-bottom: 2px solid $white;
        font-size: 2em;
        color: $white;
        font-family: $mont;
        margin: 10px 0;
        outline: none;
        padding: 10px 0;
        &.searchSuccess {
          border-bottom: 2px solid green;
        }
        &.searchError {
          border-bottom: 2px solid red;
        }
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
            width: 75px;
            margin: 10px 10px;
            padding: 10px 15px;
            cursor: pointer;
            transition: 0.2s;
            @include max-dv($md) {
              width: 20%;
              margin: 3px;
            }
            @include ipad(ipadp) {
              width: 15%;
              margin: 3px;
            }
            @include ipad(ipadl) {
              width: 15%;
              margin: 3px;
            }
            @include ipad(prol) {
              width: 10%;
            }
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
