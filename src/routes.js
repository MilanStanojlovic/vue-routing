import User from './components/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/UserStart.vue';
import UserDetail from './components/UserDetail.vue';
import UserEdit from './components/UserEdit.vue';
import Header from './components/Header.vue';

export const routes = [
  {
    path: '', name: 'home', components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user', components: {
      default: User,
      'header-bottom': Header
    }, children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]
  },
  { path: '/redirect-me', redirect: '/user' },
  { path: '*', redirect: '/' }
]