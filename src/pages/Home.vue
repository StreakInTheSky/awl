<template>
  <div class="home">
    <Hero :options="heroOptions" />
  </div>
</template>

<script>
import Hero from '../components/Hero';

export default {
  name: 'Home',
  components: { Hero },
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
  .hero {
    background-image: url('../assets/img/hero-home-1.jpg');
  }
</style>
