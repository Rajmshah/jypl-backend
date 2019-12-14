<template>
  <div>
    <b-modal
      :id="'delete'+data.id"
      ref="deleteButton"
      title="Are sure you want to delete?"
      hide-footer
      no-stacking
    >
      <b-button @click="close()" variant="outline-danger" class="mr-3">Delete</b-button>
      <b-button variant="outline-primary" @click="$bvModal.hide('delete'+data.id)">Cancel</b-button>
    </b-modal>
  </div>
</template>

<script>
import { constants } from "crypto";
import service from "@/service/apiService";

export default {
  props: ["data"],
  name: "Delete",
  data() {
    return {
      status: "",
      modal: "",
      deleteData: {}
    };
  },
  created() {
    this.page = this.$route.params.page;
  },
  methods: {
    close() {
      this.modal = this.id;
      const obj = {};
      obj._id = this.data.id;
      this.$bvModal.hide("delete" + this.data.id);
      this.$emit("event_child", obj);
    },
    deleteTostr() {
      if (this.status == 200) {
        this.$toaster.success("Data Deleted Successfully");
      } else {
        this.$toaster.success("Data Deleted Unsuccessfully");
      }
    },
    closeCancelModal() {
      this.hideDeleteModal();
    }
  }
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
