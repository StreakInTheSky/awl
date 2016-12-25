<template>
  <div class="home">
    <Hero :options="heroOptions" />
    <MissionSection />
    <div class="spacer-secondary"></div>
    <LocationSection />
  </div>
</template>

<script>
import Hero from '../components/Hero';
import LocationSection from '../components/LocationSection';
import MissionSection from '../components/MissionSection';

export default {
  name: 'Home',
  components: { Hero, LocationSection, MissionSection },
  data() {
    return {
      heroOptions: {
        pre_title: 'Art CLasses Start Now',
        title: 'What Starts Here,\nChanges the World',
        link_text: 'View upcoming art classes',
        link_path: '/art-classes',
        img_path: 'hero-home-1',
      },
    };
  },
};
</script>

<style lang="scss">
  @import '../assets/scss/variables';
  .spacer-secondary {
    background-image: url('../assets/img/location-block-background.png');
    height: 360px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    font-size: 0;
  }
</style>
