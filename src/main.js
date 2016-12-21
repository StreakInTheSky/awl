// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import ArtClasses from './pages/ArtClasses';
import Locations from './pages/Locations';
import ArtCamps from './pages/ArtCamps';
import ArtParties from './pages/ArtParties';
import Tuition from './pages/Tuition';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Instructor from './pages/Instructor';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/art-classes', component: ArtClasses },
  { path: '/locations', component: Locations },
  { path: '/art-camps', component: ArtCamps },
  { path: '/art-parties', component: ArtParties },
  { path: '/tuition', component: Tuition },
  { path: '/about-us', component: AboutUs },
  { path: '/faq', component: FAQ },
  { path: '/instructor', component: Instructor },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
