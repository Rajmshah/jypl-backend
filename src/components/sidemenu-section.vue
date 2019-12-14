<template>
  <!-- sidemneu -->
  <div class="sidemenu">
    <div class="list-group bg-blue">
      <router-link
        class="list-group-item list-group-item-action rounded-0 text-capitalize list-group-item-dark text-white"
        v-for="navigation in navigations"
        v-bind:key="navigation.name"
        v-bind:to="navigation.link"
      >{{ navigation.name }}</router-link>
    </div>
  </div>
</template>

<script>
import headerLogo from "@/assets/mtc-logo.png";

export default {
  Logo: headerLogo,
  name: "sidemenu",
  data() {
    return {
      Logo: headerLogo,
      navigations: [
        {
          name: "User",
          link: "/view-user"
        },
        {
          name: "Team",
          link: "/view-team"
        },
        {
          name: "Home",
          link: "/view-home"
        },
        {
          name: "About",
          link: "/view-about"
        },
        {
          name: "Contact",
          link: "/view-contact"
        },
        {
          name: "Enquiry",
          link: "/view-enquiry"
        },
        {
          name: "Subscription",
          link: "/view-subscription"
        },
        {
          name: "Sponsors",
          link: "/view-sponsor"
        },
        {
          name: "Setting",
          link: "/view-setting"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "~@/scss/import";
</style>
