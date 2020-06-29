import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  //mode: 'hash' - default
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { selector: to.hash }
    }
  }
});

//beforeEach gets executed before each routing action
//for generic checks
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');

  //you have to execute next to allow routing action to continue
  //if not it will assume, its not allowed to continue and it will not go to the page 
  //you want to go to
  next(); //can pass false to abort, path, or object where you define a path where you want to navigate to

})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
