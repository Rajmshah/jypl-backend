<template>
  <!-- sidemneu -->
  <div class="right-sidemenu">
    <div class="list-group bg-light">
      <button
        class="list-group-item list-group-item-action rounded-0 text-uppercase sidemenu list-group-item-light"
        v-for="navigation in detail"
        v-bind:key="navigation.name"
        @click="showDeleteModal"
        ref="btnShow"
      >{{ navigation.name }}</button>
    </div>
    <b-modal id="deleteModal">
      <div class="d-block">Hello From My Modal!</div>
      <b-button @click="hideDeleteModal">Close Me</b-button>
    </b-modal>
  </div>
</template>

<script>
import headerLogo from "@/assets/mtc-logo.png";
// import button from '@/assets/humburger-button.jpeg';

export default {
  name: "Right Sidemenu",
  props: ["detail"],
  data() {
    return {
      Logo: headerLogo
      // button,
    };
  },
  methods: {
    showDeleteModal() {
      this.$root.$emit('bv::show::modal", "deleteModal');
    },
    hideDeleteModal() {
      this.$root.$emit('bv::hide::modal", "deleteModal');
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/import";
</style>
