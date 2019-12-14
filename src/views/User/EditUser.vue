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
                <h5 class="card-title m-0">Edit User</h5>
                <!-- <h4>Edit User</h4> -->
              </div>
              <div class="p-3">
                <b-form @submit="onSubmit" v-if="show">
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
                    <div class="text-danger small error-txt" v-if="$v.form.username.$error">
                      username required
                    </div>
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
                    <div class="text-danger small error-txt" v-if="$v.form.password.$error">
                      password required
                    </div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1">
                    <label for="email">Email:</label>
                    <b-form-input
                      class="rounded-0"
                      id="email"
                      type="text"
                      v-model="form.email"
                      placeholder="Enter Email"
                    />
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1">
                    <label for="mobile">Mobile:</label>
                    <b-form-input
                      class="rounded-0"
                      id="mobile"
                      type="number"
                      v-model="form.mobile"
                      placeholder="Enter Mobile"
                    />
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
          text: "User",
          href: "/view-user"
        },
        {
          text: "Edit User"
        }
      ],
      form: {
        username: "",
        password: "",
        email: ""
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
      password: { required }
    }
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      if (this.$route.params.id) {
        service.getOneUser(this.$route.params.id, data => {
          this.form = data.data;
        });
      }
    },
    onSubmit(form) {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        service.updateUser(this.$route.params.id, form, data => {
          if (data.data) {
            this.$router.push("/view-user");
          }
        });
      }
    },
    onCancel() {
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
