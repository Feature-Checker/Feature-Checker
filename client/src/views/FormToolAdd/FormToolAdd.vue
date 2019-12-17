<template>
  <section class="add-tool">
    <div class="form-box">
      <form action>
        <label for>{{$t("addTool-page.repoSearchLabel")}}</label>
        <input type="text" id="startAnimation" />
        <button type="button" class="btn purple" @click="typingAnimation">
          <i class="fas fa-search"></i>
        </button>
        <div class="lds-ring" id="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
    },
    typingAnimation(event) {
      const input = document.getElementById("startAnimation");
      const animationDiv = document.querySelector("#lds-ring");
      if (input.value !== "") {
        animationDiv.classList.add("activeAnimation");
        input.classList.add("searchError");
      } else {
        animationDiv.classList.remove("activeAnimation");
      }
      if (input.value === "facebook/react") {
        input.classList.add("searchSuccess");
        input.classList.remove("searchError");
        animationDiv.classList.remove("activeAnimation");
        event.preventDefault;
      } else if (input.value === "") {
        input.classList.remove("searchSuccess");
        input.classList.remove("searchError");
      }
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
  height: 100vh;
  background: $navy;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    width: 30%;
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
            width: 15%;
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

.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 35px;
  right: 15px;
  display: none;
  &.activeAnimation {
    display: block;
  }
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  margin: 8px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
