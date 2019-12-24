<template>
  <section class="frontend-page">
    <header-section />
    <main>
      <div class="wrapper">
        <h3 class="section-title">{{ $t("development.frontend.title") }}</h3>
        <p class="text">{{ $t("development.frontend.titleContent") }}</p>
        <div class="popular-tech">
          <h3 class="section-title middle">{{ $t("development.frontend.popular-technology.title") }}</h3>
          <div class="tech-box">
            <div class="box-item" v-for="tech in technologies" :key="tech.id">
              <img class="tech-logo" :src="tech.logo" alt />
              <span class="tech-name">{{ tech.name }}</span>
              <span class="tech-version">{{ tech.version }}</span>
              <button class="btn purple">{{ $t("landingHeader.button") }}</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- <div>
      <button @click="changeNumber()">asdasdasd</button>
      <span id="number">{{number}}</span>
    </div>-->
    <footer-section />
  </section>
</template>

<script>
import Header from "../Components/Header.vue";
import Footer from "../Components/Footer.vue";
export default {
  components: {
    "header-section": Header,
    "footer-section": Footer
  },
  data() {
    return {
      // number: 0,
      technologies: [
        {
          logo: require("@/assets/images/utils/logos/javascript.svg"),
          name: "JavaScript",
          version: "1.0.0",
          id: "1"
        },
        {
          logo: require("@/assets/images/utils/logos/vuejs.svg"),
          name: "Vue",
          version: "1.0.0",
          id: "2"
        },
        {
          logo: require("@/assets/images/utils/logos/angular.svg"),
          name: "Angular",
          version: "1.0.0",
          id: "3"
        },
        {
          logo: require("@/assets/images/utils/logos/javascript.svg"),
          name: "JavaScript",
          version: "1.0.0",
          id: "4"
        },
        {
          logo: require("@/assets/images/utils/logos/javascript.svg"),
          name: "JavaScript",
          version: "1.0.0",
          id: "5"
        },
        {
          logo: require("@/assets/images/utils/logos/javascript.svg"),
          name: "JavaScript",
          version: "1.0.0",
          id: "6"
        }
      ]
    };
  },
  // methods: {
  //   changeNumber() {
  //     this.number += 2;
  //     if (this.number == 10) {
  //       this.colorNumber();
  //     }
  //   },
  //   colorNumber() {
  //     const number = document.getElementById("number");

  //     number.style.color = "blue";
  //   }
  // },
  created() {
    document.title = "Dev Release | Frontend";
  }
};
</script>

<style lang="scss">
.frontend-page {
  main {
    padding: 100px 0;
    h3 {
      color: $navy;
      text-align: center;
    }
    .tech-box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .box-item {
        width: 16.5%;
        display: flex;
        flex-direction: column;
        align-items: center;

        @include max-dv($xl) {
          width: 30%;
          margin-bottom: 50px;
        }
        @include max-dv($md - 1) {
          width: 50%;
          margin-bottom: 50px;
        }
        .tech-logo {
          width: 100px;
          height: 100px;
          margin-bottom: 10px;
        }
        .tech-name {
          text-transform: uppercase;
          color: $clay;
          font-family: $poppins;
          font-weight: 600;
        }
        .tech-version {
          color: $navy;
          font-size: 1.2em;
          margin: -5px 0 0 0;
        }
        button {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
