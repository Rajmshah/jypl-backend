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
                <h5 class="card-title m-0">Create About</h5>
              </div>
              <div class="p-3">
                <b-form @reset="onReset" @submit="onSubmit" v-if="show">
                  <b-form-group>
                    <label id="exampleInputGroup1" label="content1:" label-for="exampleInput1">
                      Content 1:
                      <span class="error">*</span>
                    </label>
                    <tinymce
                      id="d1"
                      placeholder="Enter Content1"
                      v-model="form.content1"
                      :config="editorConfig"
                    ></tinymce>
                  </b-form-group>

                  <b-form-group>
                    <label id="exampleInputGroup2" label="content2:" label-for="exampleInput2">
                      Content 2:
                      <span class="error">*</span>
                    </label>
                    <tinymce
                      id="d2"
                      placeholder="Enter Content2"
                      v-model="form.content2"
                      :config="editorConfig"
                    ></tinymce>
                  </b-form-group>

                  <b-form-group>
                    <label id="team" label="Team" label-for="team">Team:</label>
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
                            <div>Image (480 x 480)</div>
                          </th>
                          <th>
                            <div>Designation</div>
                          </th>
                          <th>
                            <div>Description</div>
                          </th>
                          <th>
                            <div>Status</div>
                          </th>
                          <th>
                            <div>Action</div>
                          </th>
                        </thead>
                        <tbody class>
                          <tr v-for="(teamList,index) in form.team" :key="teamList.index">
                            <td>
                              <div class="text-center">{{index + 1}}</div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  v-model="teamList.name"
                                  placeholder="Enter Name"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-button
                                  :id="index"
                                  raised
                                  @click="onClickFile(index)"
                                  variant="primary"
                                  type="button"
                                >Upload</b-button>
                                <input
                                  type="file"
                                  :name="'image'+index"
                                  style="display:none"
                                  ref="fileInput"
                                  accept="image/*"
                                  @input="onFilePicked(index)"
                                />
                                <div v-if="teamList.image" class="my-1">
                                  <img
                                    :src="teamList.image | serverimage"
                                    width="100"
                                    height="auto"
                                    alt
                                  />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  v-model="teamList.designation"
                                  placeholder="Enter Designation"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-textarea
                                  v-model="teamList.description"
                                  placeholder="Enter Description"
                                  rows="3"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-checkbox v-model="teamList.status" />
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
                    <b-button type="submit" variant="primary" class="mr-2 px-3 rounded-0">Submit</b-button>
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
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
export default {
  name: "CreateAbout",
  components: {
    HeaderSection,
    Sidemenu
  },
  data() {
    return {
      errors: [],
      breadCrum: [
        {
          text: "About",
          href: "/view-about"
        },
        {
          text: "Create About"
        }
      ],
      form: {
        content1: "",
        content2: "",
        team: []
      },
      options: [],
      showError: false,
      show: true,
      editorConfig: {
        // The configuration of the rich-text editor.
      }
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.form.content1) {
        this.showError = true;
        this.$toaster.error("Required fields are missing.");
      } else {
        this.showError = false;
        service.saveAbout(this.form, data => {
          if (data.data) {
            this.$router.push("/view-about");
          }
        });
      }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.content1 = "";
      this.form.content2 = "";
      this.form.team = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    goToPage() {
      this.$router.push("/view-about");
    },
    add() {
      this.form.team.push({
        image: "",
        name: "",
        description: "",
        designation: "",
        status: false
      });
    },
    deleteAdded(index) {
      this.form.team.splice(index, 1);
    },
    onClickFile(index) {
      this.$refs.fileInput[index].click();
    },
    onFilePicked(index) {
      var files = this.$refs.fileInput[index].files;
      if (files && files.length > 0 && files[0].name) {
        var filename = files[0].name;
        if (filename.lastIndexOf(".") <= 0) {
          this.$toaster.error("Please Add Valid File!");
        } else if (files[0].size > 1024 * 1024) {
          this.$toaster.error("Image size is greater than 1 MB");
        } else {
          var fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            this.imageUrl = fileReader.result;
          });
          fileReader.readAsDataURL(files[0]);
          this.image = files[0];
          var formData = new FormData();
          formData.append("file", this.image);
          service.upload(formData, data => {
            if (data.data.data) {
              this.$toaster.success("Image Uploaded Successfully");
              this.form.team[index].image = data.data.data[0];
            }
          });
        }
      } else {
        this.$toaster.error("Select Image");
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
