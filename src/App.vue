<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <router-view></router-view>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

export default {
  name: 'app',
  components: { HeaderComponent, FooterComponent },
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
</style>
