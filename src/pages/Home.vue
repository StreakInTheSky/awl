<template>
  <div class="home">
    <Hero :options="heroOptions" />
    <section class="mission">
      <img class="mission__img" src="../assets/img/mission-artwork.png" alt="Flower and Kitten Artwork" />
      <p class="mission__text"><span class="mission__title">The Mission</span> We work hard to capture the unique style that each student brings while providing a fun and loving environment for students of all levels to grow and learn.</p>
    </section>
    <div class="spacer-secondary"></div>
    <section class="location">
      <span class="location__title">View Locations</span>
      <div class="location__wrapper">
        <div class="location__row">
          <LocationCard />
          <LocationCard />
        </div>
        <div class="location__row">
          <LocationCard />
          <LocationCard />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '../components/Hero';
import LocationCard from '../components/LocationCard';

export default {
  name: 'Home',
  components: { Hero, LocationCard },
  data() {
    return {
      heroOptions: {
        pre_title: 'Art CLasses Start Now',
        title: 'What Starts Here,\nChanges the World',
        link_text: 'View upcoming art classes',
        link_path: '/art-classes',
      },
    };
  },
};
</script>

<style lang="scss">
  @import '../assets/scss/variables';

  .hero {
    background-image: url('../assets/img/hero-home-1.jpg');
  }
  .spacer-secondary {
    background-image: url('../assets/img/location-block-background.png');
    height: 360px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    font-size: 0;
  }
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
  .location {
    background-image: url('../assets/img/secondary-background-tile.png');
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;

    &__title {
      font-family: $font-secondary;
      -webkit-font-smoothing: antialiased;
      color: white;
      font-size: 3.5em;
      position: absolute;
      top: -100px;
    }
    &__row {
      display: flex;
    }
    &__card {
      &:first-child {
        margin-right: 30px;
      }
      &--top {
        background-image: url('http://placekitten.com/475/250');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      &--overlay {
        width: 475px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba($brand-primary, .7);

        h2 {
          font-family: $font-secondary;
          color: $brand-white;
          font-size: 1.5em;
          -webkit-font-smoothing: antialiased;
        }
      }
    }
  }
</style>
