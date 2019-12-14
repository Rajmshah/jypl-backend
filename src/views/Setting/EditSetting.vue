<template>
  <div>
    <!-- header -->
    <header>
      <header-section></header-section>
    </header>
    <div class="d-flexs">
      <!-- sidemenu -->
      <sidemenu class="bg-dark"></sidemenu>
      <!-- sidemenu end-->
      <!-- header end -->
      <div class="main-content">
        <!-- breadcrum -->
        <b-breadcrumb :items="breadCrum" append class="bg-light border rounded-0" />
        <div class="container-fluid basic-table my-3">
          <div class="card rounded-0">
            <div class="card-body p-0 rounded-0">
              <div class="card-header">
                <h5 class="card-title m-0">Edit Setting</h5>
                <!-- <h4>Edit Setting</h4> -->
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group
                    id="exampleInputGroup1"
                    :class="{ hasError: $v.form.playerCount.$error }"
                  >
                    <label for="playerCount">
                      Player Count
                      <small>(Per Team)</small>:
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="playerCount"
                      type="number"
                      v-model="form.playerCount"
                      required
                      placeholder="Enter Player Count"
                    />
                    <div class="text-danger small error-txt" v-if="$v.form.playerCount.$error">
                      Player Count required
                    </div>
                  </b-form-group>
                  <!--End -->

                  <b-form-group class="text-center">
                    <b-button
                      v-on:click="onSubmit(form)"
                      variant="primary"
                      class="mr-2 px-3 rounded-0"
                      >Submit</b-button
                    >
                    <b-button
                      class="rounded-0 px-3"
                      type="cancel"
                      v-on:click="onCancel()"
                      variant="danger"
                      >Cancel</b-button
                    >
                  </b-form-group>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from "@/components/header-section.vue";
import { required, email } from "vuelidate/lib/validators";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
import router from "@/router.js";
import { constants } from "crypto";
export default {
  name: "Form",
  components: {
    HeaderSection,
    Sidemenu
  },
  data() {
    return {
      error: [],
      breadCrum: [
        {
          text: "Setting",
          href: "/view-setting"
        },
        {
          text: "Edit Setting"
        }
      ],
      form: {},
      options: [],
      show: true
    };
  },
  validations: {
    form: {
      playerCount: {
        required
      }
    }
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      if (this.$route.params.id) {
        service.getOneSetting(this.$route.params.id, data => {
          this.form = data.data;
        });
      }
    },
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        service.updateSetting(this.$route.params.id, form, data => {
          if (data.data) {
            this.$router.push("/view-setting");
          }
        });
      }
    },
    onCancel() {
      this.$router.push("/view-setting");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/scss/import";
.error-txt {
  list-style-type: none;
  color: $red;
  padding: 0;
}
</style>
