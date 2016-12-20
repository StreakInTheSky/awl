<template>
  <div id="app">
    <header>
      <div class="logo">
        <h1>Art with Larisse</h1>
      </div>
      <nav>
        <ul class="nav__list">
          <li class="nav__list--item"><a href="#">Art Classes</a></li>
          <li class="nav__list--item"><a href="#">Locations</a></li>
          <li class="nav__list--item"><a href="#">Art Camps</a></li>
          <li class="nav__list--item"><a href="#">Art Parties</a></li>
          <li class="nav__list--item"><a href="#">Tuition</a></li>
          <li class="nav__list--item"><a href="#">About Us</a></li>
        </ul>
      </nav>
    </header>
    <main>
      Main Content Goes Here
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
};
</script>

<style lang="scss">
  @import 'assets/scss/app';

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    color: #828282;
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

          &:hover {
            color: black;
          }
        }
      }
    }
  }
</style>
