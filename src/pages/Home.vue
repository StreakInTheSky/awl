<template>
  <div class="home">
    <Hero :options="options" />
  </div>
</template>

<script>
import Hero from '../components/Hero';

export default {
  name: 'Home',
  components: { Hero },
  data() {
    return {
      heroOptions: {},
    };
  },
};
</script>

<style lang="scss">

</style>
