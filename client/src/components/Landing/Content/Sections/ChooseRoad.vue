<template>
  <section class="choose-road">
    <div class="title-box">
      <h2>{{ $t("landingContent.contentChoose.title") }}</h2>
      <h4>
        {{ $t("landingContent.contentChoose.subtitle") }}
      </h4>
    </div>
    <div class="tech-box" v-if="mobile">
      <div class="tech-item boxShadow">
        <div class="item-title frontend">
          <h2>Frontend</h2>
        </div>
        <div class="item-content">
          <div class="latest">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.lastUpdated") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-stars">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostStars") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-download">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostDownloads") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="tech-item boxShadow">
        <div class="item-title backend">
          <h2>Backend</h2>
        </div>
        <div class="item-content ">
          <div class="latest">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.lastUpdated") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-stars">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostStars") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-download">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostDownloads") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="tech-item boxShadow">
        <div class="item-title design">
          <h2>Design</h2>
        </div>
        <div class="item-content">
          <div class="latest">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.lastUpdated") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-stars">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostStars") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-download">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostDownloads") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tech-box" v-if="!mobile">
      <div class="tech-item boxShadow">
        <div class="item-title frontend">
          <h2>Frontend</h2>
        </div>
        <div class="item-content desktop">
          <div class="latest">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.lastUpdated") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-stars">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostStars") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-download">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostDownloads") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="tech-item boxShadow">
        <div class="item-title backend">
          <h2>Backend</h2>
        </div>
        <div class="item-content desktop">
          <div class="latest">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.lastUpdated") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-stars">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostStars") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-download">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostDownloads") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="tech-item boxShadow">
        <div class="item-title design">
          <h2>Design</h2>
        </div>
        <div class="item-content desktop">
          <div class="latest">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.lastUpdated") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-stars">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostStars") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
          <div class="most-download">
            <div class="content-title">
              <p>
                {{ $t("landingContent.contentChoose.mostDownloads") }}
              </p>
            </div>
            <div class="content-list">
              <ul>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
                <li><span>i</span>Tech Name</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mobile: false
    };
  },
  methods: {
    isMobile() {
      if (screen.width <= 1024) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    if (this.isMobile()) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
};
</script>

<style lang="scss">
$itemContentPadding: 10px;

section.choose-road {
  min-height: 100vh;
  .title-box {
    h2,
    h4 {
      color: $navy;
      text-align: center;
    }
    h4 {
      font-size: 16px;
      font-weight: 400;
      margin: 20px 0 0 0;
    }
  }
  .tech-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    .tech-item {
      height: 300px;
      flex-basis: calc(50% - 20px * 2);
      margin: 20px 20px;
      background: $white;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      @include max-dv($md) {
        flex-basis: 100%;
        margin: 20px 0;
        cursor: inherit;
      }
      @include ipad(ipadl) {
        flex-basis: 100%;
        margin: 20px 0;
        cursor: inherit;
      }
      @include ipad(prop) {
        flex-basis: 100%;
        margin: 20px 0;
        cursor: inherit;
      }
      @include max-dv($md - 1) {
        height: fit-content;
      }

      .item-title {
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        height: 70px;
        transition: 0.5s ease-in-out;
        position: absolute;
        width: 100%;
        &.frontend {
          background-color: #7f53ac;
          background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
        }
        &.backend {
          background-color: #045de9;
          background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
        }
        &.design {
          background-color: #ee9617;
          background-image: linear-gradient(315deg, #ee9617 0%, #fe5858 74%);
        }
        h2 {
          color: $white;
          text-align: center;
          font-family: $mont;
          font-weight: 500;
        }
      }
      .item-content {
        padding: 10px 20px;
        margin-top: 70px;
        display: flex;
        justify-content: space-around;
        @include max-dv($md - 1) {
          flex-wrap: wrap;
          height: fit-content;
          justify-content: center;
        }
        .latest,
        .most-stars,
        .most-download {
          height: fit-content;
          @include max-dv($md - 1) {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px 0;
          }
          .content-title {
            display: flex;
            align-items: center;
            p {
              font-family: $mont;
              font-size: 16px;
              font-weight: 600;
            }
          }
          .content-list {
            height: 100%;
            margin-top: 10px;
            ul {
              // 290px - height of container (free space), 10px - margin top from upper class
              height: calc(175px - 10px);
              list-style: none;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              li {
                display: flex;
                align-items: center;
                font-size: 14px;
                @include max-dv($md - 1) {
                  font-size: 12px;
                }
                span {
                  display: block;
                  width: 15px;
                }
              }
            }
          }
        }
      }
      &:hover {
        @include min-dv($lg) {
          .item-title {
            height: 100%;
            width: 100%;
          }
        }
        @include ipad(ipadl) {
          .item-title {
            height: 70px;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
