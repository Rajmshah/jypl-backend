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
                <h5 class="card-title m-0">Create User</h5>
              </div>
              <div class="p-3">
                <b-form @reset="onReset" v-if="show">
                  <b-form-group
                    id="exampleInputGroup1"
                    :class="{ hasError: $v.form.username.$error }"
                  >
                    <label for="username">
                      Username:
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="username"
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="Enter Username"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.username.$error"
                    >userName required</div>
                  </b-form-group>

                  <b-form-group
                    id="exampleInputGroup1"
                    :class="{ hasError: $v.form.password.$error }"
                  >
                    <label for="password">
                      Password:
                      <span class="text-danger">*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="password"
                      type="text"
                      v-model="form.password"
                      required
                      placeholder="Enter Password"
                    />
                    <div
                      class="text-danger small error-txt"
                      v-if="$v.form.password.$error"
                    >password required</div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1">
                    <label for="exampleInput1">Email:</label>
                    <b-form-input
                      class="rounded-0"
                      id="exampleInput1"
                      type="text"
                      v-model="form.email"
                      placeholder="Enter Email"
                    />
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1">
                    <label for="mobile">Contact No:</label>
                    <b-form-input
                      class="rounded-0"
                      id="mobile"
                      type="number"
                      v-model="form.mobile"
                      placeholder="Enter Contact No."
                    />
                  </b-form-group>

                  <!--End -->

                  <b-form-group class="text-center">
                    <b-button
                      v-on:click="onSubmit(form)"
                      variant="primary"
                      class="mr-2 px-3 rounded-0"
                    >Submit</b-button>
                    <b-button class="rounded-0 mr-2 px-3" type="reset" variant="danger">Reset</b-button>
                    <b-button class="rounded-0 px-3" @click="goToPage()" variant="warning">Cancel</b-button>
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
          text: "User",
          href: "/view-user"
        },
        {
          text: "Create User"
        }
      ],
      form: {
        username: "",
        email: "",
        password: ""
      },
      options: [],
      show: true
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
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
        service.saveUser(form, data => {
          if (data.data) {
            this.$router.push("/view-user");
          }
        });
      }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.username = "";
      this.form.email = "";
      this.form.password = "";
      delete this.form.mobile;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    goToPage() {
      this.$router.push("/view-user");
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
