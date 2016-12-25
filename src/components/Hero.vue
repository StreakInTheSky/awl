<template>
  <div class="hero" :style="`background-image: url('/static/images/${options.img_path}');`">
    <div class="hero__text-wrapper" :class="options.pre_title ? '' : 'title-only'">
      <p v-if="options.pre_title" class="hero__pre-title">{{options.pre_title}}</p>
      <h1 v-if="options.title" class="hero__title" v-html="title"></h1>
      <router-link to="/art-classes" v-if="options.link_text" class="hero__link">{{options.link_text}} <i class="icon-gizmo">next</i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options'],
  computed: {
    title() {
      return this.options.title.replace(/\n/, '<br>');
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/scss/variables';

  .hero {
    position: relative;
    font-size: 0;
    height: 411px;
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

      &.title-only {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .hero__title {
          margin: 0;
        }
      }
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
      font-size: 1.2em;
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
