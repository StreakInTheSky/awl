<template>
  <header>
    <router-link to="/" class="logo">Art with Larisse</router-link>
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
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
  @import '../assets/scss/variables';

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    color: $brand-grey;
    background-color: $brand-white;
    -webkit-font-smoothing: antialiased;
    height: 250px;

    .logo {
      content: url('../assets/img/logo.png');
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
  }
</style>
