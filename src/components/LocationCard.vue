<template>
  <div class="location__card">
    <div class="location__card--top">
      <div class="location__card--overlay" :style="`background-color: rgba(${card.color}, .7);`">
        <h2>{{card.name}}</h2>
      </div>
    </div>
    <div class="location__card--bottom">
      <address>
        {{card.address.line1}}<br>
        {{card.address.city}}, {{card.address.state}} {{card.address.postal}}<br>
        <a :href="'tel:' + card.phone.link" rel="nofollow">{{card.phone.text}}</a>
      </address>
      <a :href="'mailto:' + card.email">Contact Us<i class="icon-gizmo">mail</i></a>
      <a href="javascript();">Class Schedule<i class="icon-gizmo">calendar</i></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
};
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

.location {
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
