<template>
  <section class="add-tool">
    <div class="form-box wrapper">
      <form action onSubmit="return false;">
        <label for>{{$t("addTool-page.repoSearchLabel")}}</label>
        <input type="text" id="startAnimation" @keyup.enter="searchValidation()" />
        <div class="button-box">
          <button type="button" class="btn purple" @click=" searchValidation()">
            <i class="fas fa-search"></i>
          </button>
          <button type="button" class="btn hit-pink" @click=" clearRepo()">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <div class="logo-container">
          <p>{{$t("addTool-page.logoTitle")}}</p>
          <div class="logos">
            <img
              alt
              :src="logo"
              v-for="(logo, id) in repoImages"
              @click="selectItem(id)"
              v-bind:key="id"
              :class="{ active: id == activeItem }"
            />
          </div>
        </div>
        <button class="btn purple">{{$t("addTool-page.button")}}</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      activeItem: null,
      repoImages: []
    };
  },
  methods: {
    selectItem(id) {
      if (this.activeItem !== id) {
        this.activeItem = id;
      } else if (this.activeItem !== null) {
        this.activeItem = null;
      } else {
        this.activeItem = id;
      }
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

          this.repoImages = [];
          this.activeItem = null;

          for (let i = 0; i < result.data.length; i++) {
            this.repoImages.push(result.data[i].url);
            this.selected = result.data[i].id;
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
          // console.log(result.data.i
          if (result.data.isValid) {
            input.classList.add("searchSuccess");
            input.classList.remove("searchError");
            this.imageSearch();
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
    },
    clearRepo() {
      const input = document.getElementById("startAnimation");
      input.value = "";
      this.repoImages = [];
      input.classList.remove("searchSuccess");
      input.classList.remove("searchError");
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
  padding-top: 100px;
  @include max-dv($md - 1) {
    padding-top: 200px;
  }
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
      .button-box {
        display: flex;
        justify-content: center;
        button {
          margin: 0 30px;
          svg {
            font-size: 1.6em;
          }
        }
      }
      button {
        margin: 0 auto;
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
            width: 100px;
            height: 100%;
            margin: 10px 10px;
            padding: 10px 15px;
            cursor: pointer;
            transition: 0.2s;
            @include max-dv($md) {
              width: 48%;
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
              width: 15%;
            }
            &.active {
              padding: 10px 15px;
              background: rgba(255, 255, 255, 0.3);
              border-radius: 10px;
            }
            &:hover {
              padding: 10px 15px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 10px;
            }
            &:active {
              padding: 10px 15px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
