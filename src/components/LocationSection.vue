<template>
  <section class="location">
    <span class="location__title">View Locations</span>
    <div class="location__wrapper">
      <div v-for="location in locations" class="location__row">
        <div v-for="card in location">
          <LocationCard :card="card" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LocationCard from './LocationCard';

export default {
  components: { LocationCard },
  data() {
    return {
      locations: [
        [
          {
            name: 'Bonita',
            subtitle: '',
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
            color: '73,38,73',
          },
          {
            name: 'Coming Soon',
            subtitle: 'Scripps Ranch or Kearny Mesa',
            color: '253,163,89',
          },
        ],
        [
          {
            name: 'La Mesa',
            subtitle: '',
            address: {
              line1: '5208 Jackson Drive, Ste 111',
              city: 'La Mesa',
              state: 'CA',
              postal: '91942',
            },
            phone: {
              text: '(619) 857-1270',
              link: '+1-619-857-1270',
            },
            email: 'lamesa@artwithlarisse.com',
            link_path: 'lamesa',
            color: '235,101,89',
          },
          {
            name: 'Santee',
            subtitle: '',
            address: {
              line1: '9225 Carlton Hills Blvd, Ste. 31',
              city: 'Santee',
              state: 'CA',
              postal: '92071',
            },
            phone: {
              text: '(619) 855-2787',
              link: '+1-619-855-2787',
            },
            email: 'santee@artwithlarisse.com',
            link_path: 'santee',
            color: '238,192,44',
          },
        ],
      ],
    };
  },
};
</script>

<style lang="scss">
  @import '../assets/scss/variables';

  .location {
    background-image: url('../assets/img/secondary-background-tile.png');
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 100px;

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
