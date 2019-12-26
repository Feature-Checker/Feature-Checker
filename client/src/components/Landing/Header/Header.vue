<template>
  <header class="landing-header">
    <div class="wrapper">
      <div class="header-content">
        <div class="visual-side">
          <div class="header-layer">
            <img src="@/assets/images/utils/vectors/couple.png" alt class="couple" />
          </div>
        </div>
        <div class="content-side">
          <h1>
            {{ $t("landingHeader.titlestart") }}
            <span>{{ $t("landingHeader.titlecolor") }}</span>
            {{ $t("landingHeader.titleend") }}
          </h1>
          <h4>{{ $t("landingHeader.subtitle") }}</h4>
          <a class="btn hit-pink" href>{{ $t("landingHeader.button") }}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
<style lang="scss">
header.landing-header {
  height: 100vh;
  width: 100%;
  background: url("~@/assets/images/background/lp-header-bg.png");
  background-size: cover;
  background-position: center -100px;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 100px;
  margin: 0 0 50px 0;
  @include lg {
    height: 85vh;
  }
  @include xs {
    background-position: center -50px;
  }

  @include land-sm {
    background-position: 0px -10px;
  }
  .header-content {
    display: flex;
    justify-content: center;
    height: calc(100vh - 8vh * 2);
    @include land-sm {
      align-items: center;
    }
    @include ipad(ipadp) {
      align-items: center;
      height: calc(100vh - 8vh * 4);
    }
    @include ipad(prop) {
      align-items: center;
      height: calc(100vh - 8vh * 5);
    }
    .visual-side {
      flex-basis: 50%;
      position: relative;
      @include max-dv($md) {
        display: none;
      }
      @include land-sm {
        display: none;
      }

      @include lg {
        display: none;
      }
      .header-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 1;
        z-index: 0;
        img.couple {
          position: absolute;
          top: 5%;
          left: 0px;
          width: 450px;
          opacity: 1;
          z-index: -1;
          transform: rotateY(180deg);
          // @include md {
          //   width: 400px;
          //   top: 400px;
          //   left: -30px;
          // }
          // @include lg {
          //   width: 500px;
          //   top: 350px;
          //   left: -30px;
          // }
        }
      }
    }
    .content-side {
      height: 90%;
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @include max-dv($md) {
        flex-basis: 100%;
        height: 70%;
        align-items: center;
      }
      @include md {
        flex-basis: 100%;
        height: 50%;
      }
      @include lg {
        flex-basis: 100%;
        height: 50%;
        align-items: center;
      }
      @include land-sm {
        flex-basis: 100%;
        height: 50%;
        align-items: center;
      }
      h1 {
        @include max-dv($md) {
          text-align: center;
        }
        @include lg {
          text-align: center;
        }
        @include xs {
          font-size: calc(#{$h1} - 0.8rem);
        }
        @include land-sm {
          font-size: calc(#{$h1} - 0.8rem);
        }
        span {
          font-size: $h1;
          font-family: $poppins;
          color: $hitPink;
          @include xs {
            font-size: calc(#{$h1} - 0.8rem);
          }
          @include land-sm {
            font-size: calc(#{$h1} - 0.8rem);
          }
        }
      }
      h4 {
        font-weight: normal;
        @include max-dv($md) {
          text-align: center;
        }
        @include lg {
          text-align: center;
        }
        @include xs {
          font-size: calc(#{$h3} - 0.4rem);
        }
        @include land-sm {
          font-size: calc(#{$h3} - 0.4rem);
        }
      }
      .btn {
        margin-top: 30px;
      }
    }
  }
}
</style>
