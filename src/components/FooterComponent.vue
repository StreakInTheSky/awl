<template>
  <footer>
    <div class="footer__social">
      <a href="https://www.facebook.com/artwithlarisse" class="footer__social--icon">facebook</a>
      <a href="https://www.instagram.com/artwithlarisse" class="footer__social--icon">instagram</a>
      <a href="https://twitter.com/artwithlarisse" class="footer__social--icon">twitter</a>
    </div>
    <router-link class="footer__social--link" to="/faq">Frequently Asked Questions</router-link>
    <router-link class="footer__social--link" to="/instructor">Become an Instructor</router-link>
    <p class="footer__copyright">Designed by Miles Cartwright. Built by Art Longbottom. All rights reserved with Art with Larisse</p>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  @import '../assets/scss/variables';

  footer {
    background-color: $brand-grey-light;
    height: 245px;
    box-sizing: border-box;
    padding: 60px 8%;

    .footer {
      &__social {
        margin-bottom: 40px;

        &--icon, &--link {
          color: $brand-grey;
          text-decoration: none;

          &:hover, .router-link-active {
            color: $brand-primary;
          }
        }
        &--icon {
          font-family: $icons-secondary;
          font-size: 30px;
          letter-spacing: 0.8em;
        }
        &--link {
          font-family: $font-primary;
          text-transform: uppercase;
          font-weight: bold;
          -webkit-font-smoothing: antialiased;
          margin-right: 45px;
        }
      }
      &__copyright {
        margin-top: 20px;
        font-family: $font-tertiary;
        color: lighten($brand-grey, 15);
      }
    }
  }
</style>
