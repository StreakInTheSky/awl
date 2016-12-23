<template>
  <div class="location__card">
    <div class="location__card--top">
      <div class="location__card--overlay">
        <h2>Bonita</h2>
      </div>
    </div>
    <div class="location__card--bottom">
      <address>
        4510 Bonita Road<br>
        Bonita, CA 91902<br>
        <a href="tel:+1-619-508-1299" rel="nofollow">(619) 508-1299</a>
      </address>
      <a href="mailto:bonita@artwithlarisse.com">Contact Us<i class="icon-gizmo">mail</i></a>
      <a href="javascript();">Class Schedule<i class="icon-gizmo">calendar</i></a>
    </div>
  </div>
</template>

<script>
export default {

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
