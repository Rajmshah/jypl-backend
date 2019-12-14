<template>
  <div>
    <b-modal id="modal-1" ref="showImage" hide-footer no-stacking>
      <img :src="data.id | serverimage" alt="profile photograph" width="300" height="auto" />
      <!-- <b-button hidden variant="outline-primary" @click="$bvModal.hide('modal-1')">Cancel</b-button> -->
    </b-modal>
  </div>
</template>

<script>
import service from "@/service/apiService";
import globalJs from "@/service/global";
import filter from "@/filters/filter.js";

export default {
  props: ["data"],
  name: "Image",
  data() {
    return {
      status: "",
      modal: "",
      viewImage: ""
    };
  },
  created() {
    this.page = this.$route.params.page;
    // this.viewImage = ;
  },
  methods: {}
};
</script>
<style lang="scss">
@import "~@/scss/import";
.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  text-align: center;
}
</style>
