// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import ArtClasses from './components/ArtClasses';
import Locations from './components/Locations';
import ArtCamps from './components/ArtCamps';
import ArtParties from './components/ArtParties';
import Tuition from './components/Tuition';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

Vue.use(VueRouter);
/* eslint-disable no-new */

const routes = [
  { path: '/', component: Home },
  { path: '/art-classes', component: ArtClasses },
  { path: '/locations', component: Locations },
  { path: '/art-camps', component: ArtCamps },
  { path: '/art-parties', component: ArtParties },
  { path: '/tuition', component: Tuition },
  { path: '/about-us', component: AboutUs },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
