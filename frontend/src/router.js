import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage'
import SignupPage from './views/SignupPage'
import ToyList from './views/ToyList';
import ToyDetails from './views/ToyDetails';
import ToyEdit from './views/ToyEdit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignupPage
    },
    {
      path: '/toy',
      name: 'ToyList',
      component: ToyList
    },
    {
      path: '/toy/:id',
      name: 'ToyDetails',
      component: ToyDetails
    },
    {
      path: '/edit',
      name: 'ToyAdd',
      component: ToyEdit
    },
    {
      path: '/edit/:id',
      name: 'ToyEdit',
      component: ToyEdit
    },
  ]
});
