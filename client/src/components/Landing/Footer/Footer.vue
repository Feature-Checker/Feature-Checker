<template>
  <footer>
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
        </div> -->
        <div class="footer-brand">
          <img src="@/assets/images/logo/dev-logo-white.svg" alt="" />
          <span>{{ appVersion }}</span>
        </div>
        <div class="footer-nav">
          <nav class="footer-item">
            <h2>Frontend</h2>
            <ul>
              <li v-for="item in frontendItems" :key="item.title">
                {{ item.title }}
              </li>
            </ul>
          </nav>
          <nav class="footer-item">
            <h2>Backend</h2>
            <ul>
              <li v-for="item in backendItems" :key="item.title">
                {{ item.title }}
              </li>
            </ul>
          </nav>
          <nav class="footer-item">
            <h2>Design</h2>
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
export default {
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
footer {
  display: none;
  background: rgb(207, 83, 249);
  background: linear-gradient(
    45deg,
    rgba(207, 83, 249, 1) 0%,
    rgba(87, 64, 252, 1) 100%
  );
  margin-top: 100px;
  padding: 50px 0;
  height: fit-content;

  .footer-box {
    display: flex;
    justify-content: space-between;
    .footer-brand {
      position: relative;
      height: fit-content;
      img {
        width: 200px;
      }
      span {
        font-size: 1.2em;
        position: absolute;
        bottom: -2px;
        right: 5px;
        color: $lola;
        font-family: $poppins;
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
      .footer-item {
        width: 200px;
        h2 {
          color: $white;
          font-family: $mont;
        }
        ul {
          list-style: none;
          li {
            color: $white;
            font-size: 1.6em;
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
