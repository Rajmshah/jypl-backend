import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';

// import Dashboard from './views/dashboard/Dashboard.vue';

import Login from './views/Login.vue';

// User Service
import ViewTeam from './views/Team/ViewTeam.vue';
import ViewTeamDetail from './views/Team/ViewTeamDetail.vue';

// user
import ViewUser from './views/User/ViewUser.vue';
import CreateUser from './views/User/CreateUser.vue';
import EditUser from './views/User/EditUser.vue';

// Setting
import ViewSetting from './views/Setting/ViewSetting.vue';
import CreateSetting from './views/Setting/CreateSetting.vue';
import EditSetting from './views/Setting/EditSetting.vue';

// Home
import ViewHome from './views/Home/ViewHome.vue';
import CreateHome from './views/Home/CreateHome.vue';
import EditHome from './views/Home/EditHome.vue';

// About
import ViewAbout from './views/About/ViewAbout.vue';
import CreateAbout from './views/About/CreateAbout.vue';
import EditAbout from './views/About/EditAbout.vue';

// Contact
import ViewContact from './views/Contact/ViewContact.vue';
import CreateContact from './views/Contact/CreateContact.vue';
import EditContact from './views/Contact/EditContact.vue';

// Sponsor
import ViewSponsor from './views/Sponsor/ViewSponsor.vue';
import CreateSponsor from './views/Sponsor/CreateSponsor.vue';
import EditSponsor from './views/Sponsor/EditSponsor.vue';

// Subscription
import ViewSubscription from './views/Subscription/ViewSubscription.vue';

// Enquiry
import ViewEnquiry from './views/Enquiry/ViewEnquiry.vue';

import global from '@/service/global.js';

Vue.use(Router);

function guard(to, from, next) {
  const userConfig = global.getUser();
  if (Vue._.isNull(userConfig) && Vue._.isEqual(to.name, 'Login')) {
    next();
  } else if (!Vue._.isNull(userConfig) && Vue._.isEqual(to.name, 'Login')) {
    next('/view-user');
  } else if (Vue._.isNull(userConfig) && !Vue._.isEqual(to.name, 'Login')) {
    next('/');
  } else {
    next();
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/view-team',
      name: 'View Team',
      beforeEnter: guard,
      component: ViewTeam,
    },
    {
      path: '/view-team-detail/:id',
      name: 'View TeamDetail',
      beforeEnter: guard,
      component: ViewTeamDetail,
    },
    {
      path: '/create-user',
      name: 'CreateUser',
      beforeEnter: guard,
      component: CreateUser,
    },
    {
      path: '/view-user',
      name: 'ViewUser',
      beforeEnter: guard,
      component: ViewUser,
    },
    {
      path: '/edit-user/:id',
      name: 'EditUser',
      beforeEnter: guard,
      component: EditUser,
    },
    {
      path: '/create-setting',
      name: 'CreateSetting',
      beforeEnter: guard,
      component: CreateSetting,
    },
    {
      path: '/view-setting',
      name: 'ViewSetting',
      beforeEnter: guard,
      component: ViewSetting,
    },
    {
      path: '/edit-setting/:id',
      name: 'EditSetting',
      beforeEnter: guard,
      component: EditSetting,
    },
    {
      path: '/create-home',
      name: 'CreateHome',
      beforeEnter: guard,
      component: CreateHome,
    },
    {
      path: '/view-home',
      name: 'ViewHome',
      beforeEnter: guard,
      component: ViewHome,
    },
    {
      path: '/edit-home/:id',
      name: 'EditHome',
      beforeEnter: guard,
      component: EditHome,
    },
    {
      path: '/create-about',
      name: 'CreateAbout',
      beforeEnter: guard,
      component: CreateAbout,
    },
    {
      path: '/view-about',
      name: 'ViewAbout',
      beforeEnter: guard,
      component: ViewAbout,
    },
    {
      path: '/edit-about/:id',
      name: 'EditAbout',
      beforeEnter: guard,
      component: EditAbout,
    },
    {
      path: '/create-contact',
      name: 'CreateContact',
      beforeEnter: guard,
      component: CreateContact,
    },
    {
      path: '/view-contact',
      name: 'ViewContact',
      beforeEnter: guard,
      component: ViewContact,
    },
    {
      path: '/edit-contact/:id',
      name: 'EditContact',
      beforeEnter: guard,
      component: EditContact,
    },
    {
      path: '/create-sponsor',
      name: 'CreateSponsor',
      beforeEnter: guard,
      component: CreateSponsor,
    },
    {
      path: '/view-sponsor',
      name: 'ViewSponsor',
      beforeEnter: guard,
      component: ViewSponsor,
    },
    {
      path: '/edit-sponsor/:id',
      name: 'EditSponsor',
      beforeEnter: guard,
      component: EditSponsor,
    },
    {
      path: '/view-subscription',
      name: 'ViewSubscription',
      beforeEnter: guard,
      component: ViewSubscription,
    },
    {
      path: '/view-enquiry',
      name: 'ViewEnquiry',
      beforeEnter: guard,
      component: ViewEnquiry,
    },
  ],
});
