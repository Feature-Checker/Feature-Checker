<template>
  <footer class="landing-footer">
    <div class="wrapper">
      <div class="footer-box">
        <!-- <div class="footer-stats">
          <div class="version">
            <p>App version:</p>
            <span>{{ appVersion }}</span>
          </div>
          <div class="app-counter">
            <p>Tech amount:</p>
            <span>{{ techAmount }}</span>
          </div>
        </div>-->
        <div class="footer-brand">
          <module-logo />
          <router-link :to="{ name: 'addTool' }">
            <span>{{ appVersion }}</span>
          </router-link>
        </div>
        <div class="footer-nav">
          <nav class="footer-item">
            <h3>Frontend</h3>
            <ul>
              <li v-for="item in frontendItems" :key="item.title">
                {{ item.title }}
              </li>
            </ul>
          </nav>
          <nav class="footer-item">
            <h3>Backend</h3>
            <ul>
              <li v-for="item in backendItems" :key="item.title">
                {{ item.title }}
              </li>
            </ul>
          </nav>
          <nav class="footer-item">
            <h3>Design</h3>
            <ul>
              <li v-for="item in designItems" :key="item.title">
                {{ item.title }}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/views/Globals/Logo.vue";
export default {
  components: {
    "module-logo": Logo
  },
  data() {
    return {
      appVersion: "0.0.1",
      techAmount: "100",
      frontendItems: [
        {
          title: "Javascript"
        },
        {
          title: "CSS"
        },
        {
          title: "CMS"
        },
        {
          title: "Angular"
        },
        {
          title: "Vue"
        }
      ],
      backendItems: [
        {
          title: "Java"
        },
        {
          title: "Kotlin"
        },
        {
          title: "Jenkins"
        },
        {
          title: "Ember"
        },
        {
          title: "NodeJS"
        }
      ],
      designItems: [
        {
          title: "Photoshop"
        },
        {
          title: "Figma"
        },
        {
          title: "Adobe XD"
        },
        {
          title: "Illustrator"
        },
        {
          title: "GIMP"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
footer.landing-footer {
  background: $clay;
  margin-top: 100px;
  padding: 30px 0;
  height: fit-content;
  .footer-box {
    display: flex;
    justify-content: space-between;
    @include max-dv($md - 1) {
      flex-direction: column;
    }
    @include min-dv($md) {
      flex-direction: column;
    }
    @include min-dv($lg) {
      flex-direction: row;
    }
    .footer-brand {
      position: relative;
      height: fit-content;
      width: fit-content;
      margin: 0 auto;
      @include min-dv($lg) {
        margin: 0;
      }
      span {
        font-size: 1.2em;
        position: absolute;
        bottom: -2px;
        right: 5px;
        color: $lola;
        font-family: $poppins;
        @include max-dv($md - 1) {
          right: 0;
        }
        @include min-dv($md) {
          right: 0;
        }
        @include min-dv($lg) {
          right: 5px;
        }
      }
    }
    // .footer-stats {
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-around;
    //   .version,
    //   .app-counter {
    //     p {
    //       font-family: $mont;
    //       font-weight: 500;
    //       margin: 5px 0;
    //     }
    //     span {
    //       font-family: $mont;
    //       font-weight: 300;
    //     }
    //   }
    // }
    .footer-nav {
      display: flex;
      @include max-dv($md - 1) {
        flex-wrap: wrap;
        justify-content: center;
        display: none;
      }
      @include min-dv($md) {
        justify-content: center;
        margin-top: 20px;
      }
      @include min-dv($lg) {
        margin-top: 0;
      }
      .footer-item {
        width: 200px;
        @include max-dv($md - 1) {
          width: fit-content;
          display: flex;
          flex-direction: column;
          width: 40%;
        }
        @include min-dv($md) {
          width: fit-content;
          margin: 0 20px;
        }
        h3 {
          color: $white;
          font-family: $mont;
        }
        ul {
          list-style: none;
          li {
            color: $white;
            font-size: 1.2em;
            margin: 5px 0;
            font-family: $mont;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
