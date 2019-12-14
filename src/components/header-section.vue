<template>
  <header>
    <!-- header -->
    <b-navbar toggleable="md" type="light" variant="faded" class="bg-blue border-bottom" sticky>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/view-brand" class="header-logo">
        <!-- <b-img :src="Logo" fluid /> -->
        <b-img src="@/assets/mtc-logo.png" alt="MTC Marudhar Cup" fluid />
        <span class="text-white">MARUDHAR CUP</span>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav right>
            <!-- <div class="text-primary text-uppercase mr-3">{{getOneUser.name}}</div> -->
            <button class="text-white text-uppercase btn p-0" v-on:click="logout()">
              <font-awesome-icon :icon="['fa', 'sign-out-alt']" class="fa-2x" />
            </button>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import headerLogo from "@/assets/mtc-logo.png";
import { globalAgent } from "http";

import global from "@/service/global.js";
// import sidemenu from '@/components/sidemenu-section.vue';

export default {
  name: "header-section",
  // components: {
  //   sidemenu,
  // },
  data() {
    return {
      Logo: headerLogo,
      showMobileMenu: false,

      props: {
        isOpen: {
          type: Boolean,
          required: true
        }
      },
      computed: {
        valueProxy: {
          get() {
            return this.isOpen;
          },
          set(opened) {
            this.$emit("toggle-menu", opened);
          }
        }
      },
      navigations: [
        {
          name: "About",
          link: "#about"
        },
        {
          name: "Products",
          link: "#products"
        },
        // {
        //   name: "Subcription",
        //   link: "Subcription"
        // },
        {
          name: "Info",
          link: "#info"
        }
        // {
        //   name: "Contact",
        //   link: ""
        // },
        // {
        //   name: "Your Box",
        //   link: ""
        // }
      ]
    };
  },

  methods: {
    logout() {
      global.removeUser();
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
@import "~@/scss/components-scss/variable";
header {
  .navbar-categories {
    line-height: 50px;
    padding-left: 10px;
  }
  .navbar-logo {
    width: 6rem;
  }
  .i-menu-expanded {
    width: 3rem;
    height: 2rem;
  }
  .sticky-top {
    position: -webkit-fixed;
    position: fixed;
    width: 100%;
  }
  .header-logo.navbar-brand {
    img {
      height: 35px;
    }
  }
  .nav-item {
    padding: 0px 15px;
    .nav-link {
      padding: 1em 2em 0.1em;
    }
  }
  .bg-blue {
    background-color: $bg-text-blue;
  }
}
</style>
