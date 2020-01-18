import Vue from "vue";
import Router from "vue-router";

import Login from "./views/Login.vue";

import extra from "./views/extra.vue";

// Player
import ViewPlayer from "./views/Player/ViewPlayer.vue";
import EditPlayer from "./views/Player/EditPlayer.vue";

// Setting
import ViewSetting from "./views/Setting/ViewSetting.vue";
import CreateSetting from "./views/Setting/CreateSetting.vue";
import EditSetting from "./views/Setting/EditSetting.vue";

// TeamList
import ViewTeamList from "./views/TeamList/ViewTeamList.vue";
import CreateTeamList from "./views/TeamList/CreateTeamList.vue";
import EditTeamList from "./views/TeamList/EditTeamList.vue";

import global from "@/service/global.js";

Vue.use(Router);

function guard(to, from, next) {
  const userConfig = global.getUser();
  if (Vue._.isNull(userConfig) && Vue._.isEqual(to.name, "Login")) {
    next();
  } else if (!Vue._.isNull(userConfig) && Vue._.isEqual(to.name, "Login")) {
    next("/view-user");
  } else if (Vue._.isNull(userConfig) && !Vue._.isEqual(to.name, "Login")) {
    next("/");
  } else {
    next();
  }
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/view-player",
      name: "ViewPlayer",
      beforeEnter: guard,
      component: ViewPlayer
    },
    {
      path: "/edit-player/:id",
      name: "EditPlayer",
      beforeEnter: guard,
      component: EditPlayer
    },
    {
      path: "/create-setting",
      name: "CreateSetting",
      beforeEnter: guard,
      component: CreateSetting
    },
    {
      path: "/view-setting",
      name: "ViewSetting",
      beforeEnter: guard,
      component: ViewSetting
    },
    {
      path: "/edit-setting/:id",
      name: "EditSetting",
      beforeEnter: guard,
      component: EditSetting
    },
    {
      path: "/create-team-list",
      name: "CreateTeamList",
      beforeEnter: guard,
      component: CreateTeamList
    },
    {
      path: "/view-team-list",
      name: "ViewTeamList",
      beforeEnter: guard,
      component: ViewTeamList
    },
    {
      path: "/extra",
      name: "extra",
      beforeEnter: guard,
      component: extra
    },
    {
      path: "/edit-team-list/:id",
      name: "EditTeamList",
      beforeEnter: guard,
      component: EditTeamList
    }
  ]
});
