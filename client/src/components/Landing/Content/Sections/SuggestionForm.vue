<template>
  <section class="suggestion-form">
    <div class="wrapper">
      <div class="title-box">
        <h2>{{ $t("landingContent.contactForm.title") }}</h2>
        <h4>{{ $t("landingContent.contactForm.subTitle") }}</h4>
      </div>
      <form>
        <div class="form-box boxShadow">
          <div class="contact-info">
            <label for>
              {{$t("landingContent.contactForm.nameForm")}}
              <input type="text" />
              <i class="fas fa-user"></i>
            </label>
            <label for>
              Email
              <input type="text" />
              <i class="fas fa-envelope"></i>
            </label>
          </div>
          <div class="message-info">
            <label for>
              {{$t("landingContent.contactForm.titleForm")}}
              <input type="text" />
              <i class="fas fa-pen-fancy"></i>
            </label>
            <label for class="textarea">
              {{$t("landingContent.contactForm.messageForm")}}
              <textarea></textarea>
              <i class="fas fa-comment-alt"></i>
            </label>
            <button type="button" class="btn purple">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.suggestion-form {
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .form-box {
      background: rgb(23, 27, 45);
      background: linear-gradient(
        45deg,
        rgba(23, 27, 45, 1) 0%,
        rgba(37, 39, 66, 1) 100%
      );
      width: 50%;
      padding: 20px;
      border-radius: 10px;
      @include max-dv($md) {
        width: 100%;
      }
      .contact-info,
      .message-info {
        display: flex;
        justify-content: space-between;
        label {
          display: flex;
          flex-direction: column;
          color: $lola;
          font-size: 1.2em;
          font-family: $mont;
          text-transform: uppercase;
          font-weight: 600;
          width: 100%;
          position: relative;
          input,
          textarea {
            background: $navy;
            border: none;
            border: 1px solid #3c456e;
            padding: 8px 0;
            color: $gray;
            font-size: 1.2em;
            border-radius: 5px;
            margin-top: 5px;
            position: relative;
            padding-left: 5px;
            outline: none;
            padding-right: 30px;
            &:focus {
              & + svg {
                color: $purpleMedium;
              }
            }
            &::-webkit-scrollbar {
              width: 5px;
            }
            &::-webkit-scrollbar-track {
              background: $navy;
              border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #a4508b;
              background-image: linear-gradient(
                326deg,
                $purpleHeart 0%,
                $purpleMedium 74%
              );
              border-radius: 5px;
              box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
            }
          }
          input {
            padding-right: 30px;
          }
          svg {
            transition: 0.2s;
            position: absolute;
            font-size: 16px;
            color: $white;
            top: 52%;
            right: 12px;
          }
        }
      }
      .contact-info {
        label {
          width: 45%;
        }
      }
      .message-info {
        margin: 20px 0 0 0;
        display: flex;
        flex-direction: column;
        label.textarea {
          margin-top: 20px;
          textarea {
            width: 100%;
            height: 100px;
            resize: none;
          }
          svg {
            position: absolute;
            font-size: 16px;
            color: $white;
            top: inherit;
            bottom: 10px;
            right: 12px;
          }
        }
      }
      button {
        margin: 20px auto 0 auto;
        svg {
          font-size: 2em;
        }
      }
    }
  }
}
</style>
