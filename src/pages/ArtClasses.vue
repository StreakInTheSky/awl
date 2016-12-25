<template>
  <div class="art-classes">
    <Hero :options="heroOptions" />
    <section class="cta-block">
      <h2>The First Class is Free!</h2>
      <p>We invite you to attend a free introductory class to see what we are all about. We will provide the supplies needed during that first class. The student must be at least 4 ½ years of age to attend. To get started please click the “locations” button below to pick the studio closest to you.</p>
      <button class="cta__primary" type="button" name="button">Locations</button>
    </section>
  </div>
</template>

<script>
import Hero from '../components/Hero';

export default {
  name: 'ArtClasses',
  components: { Hero },
  data() {
    return {
      heroOptions: {
        title: 'Art Classes',
        img_path: 'hero-art-classes-1.png',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/scss/variables';
  .cta-block {
    background-color: $brand-white;
    padding: 80px 26% 40px;
    text-align: center;
    color: $brand-primary;

    h2 {
      font-family: $font-secondary;
      font-size: 2.5em;
      -webkit-font-smoothing: antialiased;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.3em;
      line-height: 1.7;
      margin-bottom: 30px;
    }
  }
</style>
