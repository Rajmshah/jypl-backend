<template>
  <div id="app" class="OpenSansRegular main-id" v-bind:class="{ 'close-menu': closed }">
    <div id="nav"></div>
    <button class="btn menu-icon" v-on:click="toggleMenu()" v-bind:class="{ closer: closed }">
      <!-- <font-awesome-icon icon="align-right"/> -->
      <span class="bar bar1 text-white"></span>
      <span class="bar bar2 text-white"></span>
      <span class="bar bar3 text-white"></span>
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      closed: false
    };
  },
  methods: {
    toggleMenu() {
      this.closed = !this.closed;
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/import";
.main-id {
  .d-flexs {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow-x: hidden;
    padding-top: 60px;
    .main-content {
      -ms-flex: 1;
      flex: 1;
      min-width: 0;
    }
  }
  .sidemenu,
  .d-flexs .main-content {
    transition: all ease 300ms;
  }
  &.close-menu {
    .sidemenu {
      //  .right-sidemenu
      transform: translateX(-250px);
    }
    .d-flexs .main-content {
      min-width: 100%;
      transform: translateX(-250px);
      // &.right-menu-content {
      //   min-width: calc(100% - 250px);
      // }
    }
  }
  .auth-content {
    // background: url("~@/assets/popimage/rectangle1.jpg") no-repeat center center;
    background: $cross-gray;
    background-size: cover;
  }
}

a,
.btn {
  cursor: pointer;
  transition: all ease 300ms;
}

.color-red {
  color: $red;
}

.color-orange {
  color: $orange;
}

.color-green,
.color-green a {
  color: $green !important;
}

.btn-secondary {
  background: $black;
}

.form-control:focus {
  box-shadow: none;
}

.fill-height {
  min-height: 100vh;
}

.bg-blue {
  background-color: $bg-text-blue;
}
</style>
