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
        <div v-for="location in locations" class="location__row">
          <div v-for="card in location">
            <LocationCard />
          </div>
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
      locations: [
        [
          {
            name: 'Bonita1',
            address: {
              line1: '4510 Bonita Road',
              city: 'Bonita',
              state: 'CA',
              postal: '91902',
            },
            phone: {
              text: '(619) 508-1299',
              link: '+1-619-508-1299',
            },
            email: 'bonita@artwithlarisse.com',
            link_path: 'bonita',
          },
          {
            name: 'Bonita2',
            address: {
              line1: '4510 Bonita Road',
              city: 'Bonita',
              state: 'CA',
              postal: '91902',
            },
            phone: {
              text: '(619) 508-1299',
              link: '+1-619-508-1299',
            },
            email: 'bonita@artwithlarisse.com',
            link_path: 'bonita',
          },
        ],
        [
          {
            name: 'Bonita3',
            address: {
              line1: '4510 Bonita Road',
              city: 'Bonita',
              state: 'CA',
              postal: '91902',
            },
            phone: {
              text: '(619) 508-1299',
              link: '+1-619-508-1299',
            },
            email: 'bonita@artwithlarisse.com',
            link_path: 'bonita',
          },
          {
            name: 'Bonita4',
            address: {
              line1: '4510 Bonita Road',
              city: 'Bonita',
              state: 'CA',
              postal: '91902',
            },
            phone: {
              text: '(619) 508-1299',
              link: '+1-619-508-1299',
            },
            email: 'bonita@artwithlarisse.com',
            link_path: 'bonita',
          },
        ],
      ],
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
  }
</style>
