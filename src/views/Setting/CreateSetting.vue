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
        <b-breadcrumb :items="breadCrum" class="bg-light border rounded-0" />
        <div class="container-fluid basic-table my-3">
          <div class="card rounded-0">
            <div class="card-body p-0 rounded-0">
              <div class="card-header">
                <h5 class="card-title m-0">Create Setting</h5>
              </div>
              <div class="p-3">
                <b-form @reset="onReset" v-if="show">
                  <b-form-group
                    id="exampleInputGroup1"
                    :class="{ hasError: $v.form.message.$error }"
                  >
                    <label for="message">
                      Message:
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="message"
                      type="text"
                      v-model="form.message"
                      required
                      placeholder="Enter Message"
                    />
                    <div class="text-danger small error-txt" v-if="$v.form.message.$error">
                      Message required
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
                    <b-button class="rounded-0 mr-2 px-3" type="reset" variant="danger"
                      >Reset</b-button
                    >
                    <b-button class="rounded-0 px-3" @click="goToPage()" variant="warning"
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
import { required, email } from "vuelidate/lib/validators";
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";

export default {
  name: "Form",
  components: {
    HeaderSection,
    Sidemenu
  },
  data() {
    return {
      errors: [],
      breadCrum: [
        {
          text: "Setting",
          href: "/view-setting"
        },
        {
          text: "Create Setting"
        }
      ],
      form: {},
      options: [],
      show: true
    };
  },
  validations: {
    form: {
      message: {
        required
      }
    }
  },
  methods: {
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        service.saveSetting(form, data => {
          if (data.data) {
            this.$router.push("/view-setting");
          }
        });
      }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      delete this.form.message;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    goToPage() {
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
