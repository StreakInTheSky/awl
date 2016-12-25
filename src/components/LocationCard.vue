<template>
  <div class="location__card">
    <div class="location__card--top">
      <a :href="card.link_path">
        <img v-if="card.link_path" :src="`/static/images/${card.link_path}.png`" :alt="card.name">
        <img v-if="!card.link_path" src="/static/images/blank.png" alt="Coming Soon">
        <div class="location__card--overlay" :style="`background-color: rgba(${card.color}, .7);`">
          <h2>{{card.name}}</h2>
          <h5>{{card.subtitle}}</h5>
        </div>
      </a>
    </div>
    <div class="location__card--bottom">
      <address v-if="card.address">
        {{card.address.line1}}<br>
        {{card.address.city}}, {{card.address.state}} {{card.address.postal}}<br>
        <a :href="'tel:' + card.phone.link" rel="nofollow">{{card.phone.text}}</a>
      </address>
      <div class="location__card--links">
        <a :href="'mailto:' + card.email">Contact Us<i class="icon-gizmo">mail</i></a>
        <a href="">Class Schedule<i class="icon-gizmo">calendar</i></a>
      </div>
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
      position: relative;
      overflow: hidden;
      width: 475px;
      height: 250px;

      img {
        width: 100%;
      }
    }
    &--overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 475px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h2, h5 {
        font-family: $font-secondary;
        color: $brand-white;
        font-size: 2em;
        -webkit-font-smoothing: antialiased;
      }

      h5 {
        font-size: 1.3em;
        position: absolute;
        transform: translateY(150%);
      }
    }
    &--bottom {
      padding: 10px 0 25px;
      position: relative;

      address {
        font-family: $font-tertiary;
        color: $brand-white;
        line-height: 1.5;
        font-weight: lighter;
        -webkit-font-smoothing: antialiased;
        letter-spacing: 0.02em;
        font-size: 1.2em;
      }
    }
    &--links {
      position: absolute;
      display: flex;
      color: $brand-white;
      right: 0;
      top: 0;
      flex-direction: column;
      align-items: flex-end;
      padding: 10px 0;
      font-family: $font-primary;
      text-transform: uppercase;
      font-size: 0.8em;
      line-height: 2.5;
      letter-spacing: 0.05em;

      a {
        position: relative;
        padding-right: 35px;
        transition: color 0.1s ease;

        &:hover {
          color: $brand-primary;
          transition: color 0.1s ease;
        }
      }

      .icon-gizmo {
        font-family: $icons-tertiary;
        font-size: 1.5em;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 10px;
        -webkit-font-smoothing: antialiased;
      }
    }
  }
}
</style>
