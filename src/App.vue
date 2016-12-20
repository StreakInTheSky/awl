<template>
  <div id="app">
    <header>
      <router-link to="/" class="logo">
        <h1>Art with Larisse</h1>
      </router-link>
      <nav>
        <ul class="nav__list">
          <li class="nav__list--item"><router-link to="/art-classes">Art Classes</router-link></li>
          <li class="nav__list--item"><router-link to="/locations">Locations</router-link></li>
          <li class="nav__list--item"><router-link to="/art-camps">Art Camps</router-link></li>
          <li class="nav__list--item"><router-link to="/art-parties">Art Parties</router-link></li>
          <li class="nav__list--item"><router-link to="/tuition">Tuition</router-link></li>
          <li class="nav__list--item"><router-link to="/about-us">About Us</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
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
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style lang="scss">
  @import 'assets/scss/app';
  body { background-color: $brand-primary }
  #app {
    max-width: 1480px;
    margin: 0 auto;
  }
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    color: $brand-grey;
    background-color: $brand-grey-light;
    -webkit-font-smoothing: antialiased;
    height: 250px;
  }
  .logo {
    content: url('assets/logo.png');
    width: 465px;
    height: 83px;
    margin-top: 20px;
  }
  .nav {
    &__list {
      font-family: $font-primary;
      text-transform: uppercase;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;

      &--item {
        display: inline-block;

        a {
          text-decoration: none;
          color: inherit;
          white-space: nowrap;
          padding: 15px 2.5vw;

          &:hover, .router-link-active {
            color: $brand-primary;
          }
        }
      }
    }
  }
  footer {
    background-color: $brand-grey-light;
    height: 245px;
    box-sizing: border-box;
    padding: 60px 8%;
  }
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
</style>
