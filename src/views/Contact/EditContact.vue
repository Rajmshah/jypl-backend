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
                <h5 class="card-title m-0">Edit Contact</h5>
                <!-- <h4>Edit Contact</h4> -->
              </div>
              <div class="p-3">
                <b-form name="editContact" role="form" v-if="show">
                  <b-form-group id="mapLink">
                    <label for="mapLink">Map Link:</label>
                    <b-form-input
                      class="rounded-0"
                      id="mapLink"
                      type="text"
                      v-model="form.mapLink"
                      placeholder="Enter Map Link"
                    />
                  </b-form-group>

                  <b-form-group>
                    <label for="address">Address:</label>
                    <b-form-textarea
                      class="rounded-0"
                      id="address"
                      type="text"
                      v-model="form.address"
                      placeholder="Enter Address"
                    />
                  </b-form-group>

                  <b-form-group>
                    <label for="officeAddress">Office Address:</label>
                    <b-form-textarea
                      class="rounded-0"
                      id="officeAddress"
                      type="text"
                      v-model="form.officeAddress"
                      placeholder="Enter Office Address"
                    />
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1">
                    <label for="email">
                      Email:
                      <span class="error">*</span>
                    </label>
                    <multiselect
                      id="email"
                      v-model="form.email"
                      tag-placeholder="Add this as new tag"
                      placeholder="Search or add a tag"
                      label="name"
                      track-by="code"
                      :options="emailOptions"
                      :multiple="true"
                      :taggable="true"
                      @tag="addEmail"
                    ></multiselect>
                  </b-form-group>

                  <!-- <b-form-group>
                    <label for="social">
                      Social:
                      <span class="error">*</span>
                    </label>
                    <multiselect
                      id="social"
                      v-model="form.social"
                      tag-placeholder="Add this as new tag"
                      placeholder="Search or add a tag"
                      label="name"
                      track-by="code"
                      :options="socialOptions"
                      :multiple="true"
                      :taggable="true"
                      @tag="addSocial"
                    ></multiselect>
                  </b-form-group>-->

                  <b-form-group>
                    <label for="mobile">
                      Social:
                      <span class="error">*</span>
                    </label>
                    <div class="float-right mb-3">
                      <b-button variant="primary" @click="addSocial()">Add New</b-button>
                    </div>
                    <div class="form-group table-responsive table-font reduce-tablepadding">
                      <table class="table table-striped">
                        <thead>
                          <th>
                            <div>Sr.no</div>
                          </th>
                          <th>
                            <div>Title</div>
                          </th>
                          <th>
                            <div>Link</div>
                          </th>
                          <th>
                            <div>Action</div>
                          </th>
                        </thead>
                        <tbody class>
                          <tr v-for="(socialList,index) in form.social" :key="socialList.index">
                            <td>
                              <div class="text-center">{{index + 1}}</div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  v-model="socialList.title"
                                  placeholder="Enter Title"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  v-model="socialList.link"
                                  placeholder="Enter Link"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-button
                                  class="btn btn-danger"
                                  @click="deleteSocialAdded(index)"
                                >Delete</b-button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </b-form-group>

                  <b-form-group id="exampleInputGroup1">
                    <label for="mobile">
                      Contact No:
                      <span class="error">*</span>
                    </label>
                    <div class="float-right mb-3">
                      <b-button variant="primary" @click="add()">Add New</b-button>
                    </div>
                    <div class="form-group table-responsive table-font reduce-tablepadding">
                      <table class="table table-striped">
                        <thead>
                          <th>
                            <div>Sr.no</div>
                          </th>
                          <th>
                            <div>Name</div>
                          </th>
                          <th>
                            <div>Phone No</div>
                          </th>
                          <th>
                            <div>Action</div>
                          </th>
                        </thead>
                        <tbody class>
                          <tr v-for="(mobileList,index) in form.mobile" :key="mobileList.index">
                            <td>
                              <div class="text-center">{{index + 1}}</div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  v-model="mobileList.name"
                                  placeholder="Enter Name"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  maxlength="10"
                                  v-model="mobileList.phone"
                                  @keypress="onlyNumbers"
                                  placeholder="Enter Phone No"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-button class="btn btn-danger" @click="deleteAdded(index)">Delete</b-button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </b-form-group>

                  <b-form-group class="text-center">
                    <div v-if="showError" class="error">
                      <strong>Required fields are missing.</strong>
                    </div>
                  </b-form-group>
                  <!--End -->

                  <b-form-group class="text-center">
                    <b-button @click="onSubmit" variant="primary" class="mr-2 px-3 rounded-0">Submit</b-button>
                    <b-button
                      class="rounded-0 px-3"
                      type="cancel"
                      v-on:click="onCancel()"
                      variant="danger"
                    >Cancel</b-button>
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
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
import { Multiselect } from "vue-multiselect";

export default {
  name: "EditContact",
  components: {
    HeaderSection,
    Sidemenu,
    Multiselect
  },
  data() {
    return {
      error: [],
      breadCrum: [
        {
          text: "Contact",
          href: "/view-contact"
        },
        {
          text: "Edit Contact"
        }
      ],
      form: {
        mapLink: "",
        address: "",
        officeAddress: "",
        mobile: [],
        email: [],
        social: []
      },
      emailOptions: [
        {
          name: "abc@gmail.com",
          code: "ab"
        }
      ],
      show: true,
      showError: false
    };
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      if (this.$route.params.id) {
        service.getOneSpecialContact(this.$route.params.id, data => {
          this.form = data.data;
        });
      }
    },

    onSubmit(e) {
      e.preventDefault();
      if (
        this.form.email.length == 0 ||
        this.form.social.length == 0 ||
        this.form.mobile.length == 0
      ) {
        this.showError = true;
        this.$toaster.error("Required fields are missing.");
      } else {
        this.showError = false;
        var form = _.cloneDeep(this.form);
        var email = [];
        _.each(form.email, function(n) {
          email.push(n.name);
        });
        // var social = [];
        // _.each(form.social, function(m) {
        //   social.push(m.name);
        // });
        // form.social = social;
        form.email = email;
        service.updateContact(this.$route.params.id, form, data => {
          if (data.data) {
            this.$router.push("/view-contact");
          }
        });
      }
    },
    onCancel() {
      this.$router.push("/view-contact");
    },
    addEmail(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.emailOptions.push(tag);
      this.form.email.push(tag);
    },
    addSocial() {
      // const tag = {
      //   name: newTag,
      //   code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      // };
      // this.socialOptions.push(tag);
      // this.form.social.push(tag);
      this.form.social.push({
        title: "",
        link: ""
      });
    },
    add() {
      this.form.mobile.push({
        name: "",
        phone: 0
      });
    },
    deleteAdded(index) {
      this.form.mobile.splice(index, 1);
    },
    deleteSocialAdded(index) {
      this.form.social.splice(index, 1);
    },
    onlyNumbers($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault();
      }
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
