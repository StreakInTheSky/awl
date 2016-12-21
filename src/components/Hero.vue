<template>
  <div class="hero">
    <div class="hero__text-wrapper">
      <p class="hero__pre-title">Art Classes Start Now</p>
      <h2 class="hero__title">What Starts Here,<br>Changes the World</h2>
      <a class="hero__link" href="#">View upcoming classes <i class="icon-gizmo">next</i></a>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
  @import '../assets/scss/variables';

  .hero {
    position: relative;
    font-size: 0;
    height: 411px;
    background-image: url('../assets/img/hero-home-1.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    &__img {
      width: 100%;
    }
    &__text-wrapper {
      position: absolute;
      top: 27%;
      left: 10.5%;
      color: white;
      font-size: 1rem;
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
      margin-bottom: 30px;
    }
    &__link {
      font-family: $font-tertiary;
      font-style: italic;
      -webkit-font-smoothing: antialiased;
      position: relative;
      font-size: 1.3em;
      letter-spacing: 0.02em;
      margin-left: 5px;

      .icon-gizmo {
        font-family: $icons-primary;
        font-style: normal;
        font-size: 1.5em;
        position: absolute;
        right: -35px;
        top: 70%;
        transform: translateY(-50%);
      }
    }
  }
</style>
