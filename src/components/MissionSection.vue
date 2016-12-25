<template>
  <section class="mission">
    <img class="mission__img" src="../assets/img/mission-artwork.png" alt="Flower and Kitten Artwork" />
    <p class="mission__text"><span class="mission__title">The Mission</span> We work hard to capture the unique style that each student brings while providing a fun and loving environment for students of all levels to grow and learn.</p>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss">
  @import '../assets/scss/variables';

  .mission {
    background-image: url('../assets/img/mission-block-background.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 479px;
    margin-bottom: 150px;
    position: relative;

    &__text {
      position: absolute;
      font-family: $font-tertiary;
      -webkit-font-smoothing: antialiased;
      width: 34%;
      top: 28%;
      right: 10%;
      color: $brand-white;
      font-size: 1.5em;
      line-height: 1.8em;
    }
    &__title {
      position: absolute;
      font-family: $font-primary;
      font-size: 0.6em;
      text-transform: uppercase;
      font-weight: bold;
      transform: translateX(-130%);
      letter-spacing: 0.04em;
    }
  }
</style>
