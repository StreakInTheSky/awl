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
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent';

export default {
  name: 'app',
  components: { FooterComponent },
};
</script>

<style lang="scss">
  @import 'assets/scss/app';
  @import 'assets/scss/variables';
  body { background: url('assets/img/background-tile.jpg') $brand-primary }
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
    content: url('assets/img/logo.png');
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
</style>
