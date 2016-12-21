<template>
  <div class="home">
    <div class="hero">
      <img class="hero__img" src="../assets/img/hero-home-1.jpg" alt="" />
      <div class="hero__text-wrapper">
        <p class="hero__pre-title">Art Classes Start Now</p>
        <h2 class="hero__title">What Starts Here,<br>Changes the World</h2>
        <a class="hero__link" href="#">View upcoming classes <i class="icon-gizmo">chevron-right</i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/scss/variables';

  .hero {
    position: relative;

    &__img {
      width: 100%;
    }
    &__text-wrapper {
      position: absolute;
      top: 27%;
      left: 10.5%;
      color: white;
    }
    &__pre-title {
      font-family: $font-primary;
      text-transform: uppercase;
      margin-bottom: 35px;
      letter-spacing: 0.08em;
    }
    &__title {
      font-family: $font-secondary;
      font-size: 4.6em;
      line-height: 0.9;
    }
    &__link {
      font-family: $font-tertiary;
    }
  }
</style>
