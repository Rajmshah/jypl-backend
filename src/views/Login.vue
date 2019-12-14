<template>
  <section class="login-section auth-content fill-height">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="login-content d-flex col-lg-6 mx-auto fill-height">
          <div class="login-box card align-self-center">
            <b-form class="card-body">
              <div class="login-image login-box align-self-center mt-3">
                <b-img src="@/assets/mtc-logo.png" alt="MTC Marudhar Cup" fluid />
              </div>
              <div class="text-center mt-4 mb-3 text-uppercase font-size-lg">Login</div>
              <b-form-group class="form-group floating-label-form-group controls">
                <b-form-input
                  type="text"
                  id="email"
                  class="form-control"
                  placeholder="Email"
                  required="required"
                  v-model="formData.email"
                ></b-form-input>
                <div
                  class="text-danger small error-txt"
                  v-if="$v.formData.email.$error"
                >Email required</div>
              </b-form-group>
              <b-form-group class="form-group floating-label-form-group controls">
                <b-form-input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Password"
                  required="required"
                  v-model="formData.password"
                ></b-form-input>
                <div
                  class="text-danger small error-txt"
                  v-if="$v.formData.password.$error"
                >password required</div>
              </b-form-group>
              <div class="login-button my-4 text-center">
                <b-button
                  v-on:click="login(formData)"
                  variant="primary"
                  class="text-uppercase"
                >Login</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import headerLogo from "@/assets/mtc-logo.png";
// eslint-disable-next-line no-unused-vars
import service from "@/service/apiService";
import { required, email } from "vuelidate/lib/validators";
import { constants } from "crypto";
import global from "@/service/global.js";

export default {
  name: "login",
  data() {
    return {
      error: [],
      formData: {
        email: "",
        password: ""
      },
      Logo: headerLogo,
      textHeader: "Welcome!",
      textEmail: "Email",
      textPassword: "Password",
      createAccount: "Create account"
    };
  },
  validations: {
    formData: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  created() {},
  methods: {
    login(formData) {
      var obj = {
        email: formData.email,
        password: formData.password
      };
      this.$v.formData.$touch();
      if (this.$v.formData.$error) {
        return;
      } else {
        if (
          obj.email == "mtcmarudharcup@gmail.com" &&
          obj.password == "mtc2019marudharcup"
        ) {
          global.setUser({
            isLoggedIn: true
          });
          this.$toaster.success("Login Successfully.", {
            timeout: 2000
          });
          this.$router.push("/view-user");
        } else {
          this.$toaster.error("Please Enter Valid Data.", {
            timeout: 2000
          });
        }
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@/scss/import";
.login-image {
  max-width: 120px;
  margin: 0 auto;
}

.login-box {
  width: 360px;
  margin: 0 auto;
  background: $white;
}
</style>
