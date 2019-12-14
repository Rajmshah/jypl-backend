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
                <h5 class="card-title m-0">Create Home</h5>
              </div>
              <div class="p-3">
                <b-form @reset="onReset" @submit="onSubmit" v-if="show">
                  <b-form-group>
                    <label
                      id="exampleInputGroup1"
                      label="content1:"
                      label-for="exampleInput1"
                    >Content 1:</label>
                    <b-form-textarea
                      type="text"
                      placeholder="Enter Content1"
                      v-model="form.content1"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-form-group>
                    <label
                      class="no-resize"
                      id="exampleInputGroup2"
                      label="content2:"
                      label-for="exampleInput2"
                    >Content 2:</label>
                    <b-form-textarea
                      type="text"
                      class="no-resize"
                      placeholder="Enter Content2"
                      v-model="form.content2"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-form-group class="bg-box">
                    <label id="banner" label="Banner" label-for="banner">Banner:</label>
                    <div class="float-right mb-3">
                      <b-button variant="primary" @click="addBanner()">Add Banner</b-button>
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
                            <div>Image (480 x 480)</div>
                          </th>
                          <th>
                            <div>Link Type</div>
                          </th>
                          <th>
                            <div>Link</div>
                          </th>
                          <th>
                            <div>Status</div>
                          </th>
                          <th>
                            <div>Action</div>
                          </th>
                        </thead>
                        <tbody class>
                          <tr v-for="(bannerList,index) in form.banner" :key="bannerList.index">
                            <td>
                              <div class="text-center">{{index + 1}}</div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  v-model="bannerList.title"
                                  placeholder="Enter Title"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-button
                                  :id="'bannerImage'+index"
                                  raised
                                  @click="onClickBannerFile(index)"
                                  variant="primary"
                                  type="button"
                                >Upload</b-button>
                                <input
                                  type="file"
                                  :name="'bannerImage'+index"
                                  style="display:none"
                                  ref="fileInputBanner"
                                  accept="image/*"
                                  @input="onFileBannerPicked(index)"
                                />
                                <div v-if="bannerList.image" class="my-1">
                                  <img
                                    :src="bannerList.image | serverimage"
                                    width="100"
                                    height="auto"
                                    alt
                                  />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-select v-model="bannerList.linkType">
                                  <option value="Internal">Internal</option>
                                  <option value="External">External</option>
                                </b-form-select>
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  v-model="bannerList.link"
                                  placeholder="Enter Link"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-checkbox v-model="bannerList.status" />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-button
                                  class="btn btn-danger"
                                  @click="deleteBannerAdded(index)"
                                >Delete</b-button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </b-form-group>

                  <b-form-group class="bg-box">
                    <label id="adBlock" label="Ad Block" label-for="adBlock">Ad Block:</label>
                    <div class="float-right mb-3">
                      <b-button variant="primary" @click="addAdBlock()">Add AdBlock</b-button>
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
                            <div>Image (480 x 480)</div>
                          </th>
                          <th>
                            <div>Link Type</div>
                          </th>
                          <th>
                            <div>Link</div>
                          </th>
                          <th>
                            <div>Status</div>
                          </th>
                          <th>
                            <div>Action</div>
                          </th>
                        </thead>
                        <tbody class>
                          <tr v-for="(adsList,index) in form.adBlock" :key="adsList.index">
                            <td>
                              <div class="text-center">{{index + 1}}</div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  v-model="adsList.title"
                                  placeholder="Enter Title"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-button
                                  :id="'adsImage'+index"
                                  raised
                                  @click="onClickAdBlockFile(index)"
                                  variant="primary"
                                  type="button"
                                >Upload</b-button>
                                <input
                                  type="file"
                                  :name="'adsImage'+index"
                                  style="display:none"
                                  ref="fileInputAdBlock"
                                  accept="image/*"
                                  @input="onFileAdBlockPicked(index)"
                                />
                                <div v-if="adsList.image" class="my-1">
                                  <img
                                    :src="adsList.image | serverimage"
                                    width="100"
                                    height="auto"
                                    alt
                                  />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-select v-model="adsList.linkType">
                                  <option value="Internal">Internal</option>
                                  <option value="External">External</option>
                                </b-form-select>
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-input
                                  class="rounded-0"
                                  type="text"
                                  v-model="adsList.link"
                                  placeholder="Enter Link"
                                />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-checkbox v-model="adsList.status" />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-button
                                  class="btn btn-danger"
                                  @click="deleteAdBlockAdded(index)"
                                >Delete</b-button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </b-form-group>

                  <b-form-group class="bg-box">
                    <label id="gallery" label="Gallery" label-for="Gallery">Gallery:</label>
                    <div class="float-right mb-3">
                      <b-button variant="primary" @click="addGallery()">Add Gallery</b-button>
                    </div>
                    <div class="form-group table-responsive table-font reduce-tablepadding">
                      <table class="table table-striped">
                        <thead>
                          <th>
                            <div>Sr.no</div>
                          </th>
                          <th>
                            <div>Image (480 x 480)</div>
                          </th>
                          <th>
                            <div>Image Type</div>
                          </th>
                          <th>
                            <div>Status</div>
                          </th>
                          <th>
                            <div>Action</div>
                          </th>
                        </thead>
                        <tbody class>
                          <tr v-for="(galleryList,index) in form.gallery" :key="galleryList.index">
                            <td>
                              <div class="text-center">{{index + 1}}</div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-button
                                  :id="'galleryImage'+index"
                                  raised
                                  @click="onClickGalleryFile(index)"
                                  variant="primary"
                                  type="button"
                                >Upload</b-button>
                                <input
                                  type="file"
                                  :name="'galleryImage'+index"
                                  style="display:none"
                                  ref="fileInputGallery"
                                  accept="image/*"
                                  @input="onFileGalleryPicked(index)"
                                />
                                <div v-if="galleryList.image" class="my-1">
                                  <img
                                    :src="galleryList.image | serverimage"
                                    width="100"
                                    height="auto"
                                    alt
                                  />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-select v-model="galleryList.imageType">
                                  <option value="Image 285 x 300">Image 285 x 300</option>
                                  <option value="Image 570 x 300">Image 570 x 300</option>
                                  <option value="Image 570 x 600">Image 570 x 600</option>
                                </b-form-select>
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-form-checkbox v-model="galleryList.status" />
                              </div>
                            </td>
                            <td>
                              <div class="text-center">
                                <b-button
                                  class="btn btn-danger"
                                  @click="deleteGalleryAdded(index)"
                                >Delete</b-button>
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
  name: "CreateHome",
  components: {
    HeaderSection,
    Sidemenu
  },
  data() {
    return {
      errors: [],
      breadCrum: [
        {
          text: "Home",
          href: "/view-home"
        },
        {
          text: "Create Home"
        }
      ],
      form: {
        content1: "",
        content2: "",
        banner: [],
        gallery: [],
        adBlock: []
      },
      options: [],
      showError: false,
      show: true
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      // if (!this.form.content1 || !this.form.content1) {
      //   this.showError = true;
      //   this.$toaster.error("Required fields are missing.");
      // } else {
      //   this.showError = false;
      service.saveHomepage(this.form, data => {
        if (data.data) {
          this.$router.push("/view-home");
        }
      });
      // }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.content1 = "";
      this.form.content2 = "";
      this.form.banner = [];
      this.form.adBlock = [];
      this.form.gallery = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    goToPage() {
      this.$router.push("/view-home");
    },
    addBanner() {
      this.form.banner.push({
        image: "",
        title: "",
        linkType: "",
        link: "",
        status: false
      });
    },
    deleteBannerAdded(index) {
      this.form.banner.splice(index, 1);
    },
    addAdBlock() {
      this.form.adBlock.push({
        image: "",
        title: "",
        linkType: "",
        link: "",
        status: false
      });
    },
    deleteAdBlockAdded(index) {
      this.form.adBlock.splice(index, 1);
    },
    addGallery() {
      this.form.gallery.push({
        image: "",
        imageType: "",
        status: false
      });
    },
    deleteGalleryAdded(index) {
      this.form.gallery.splice(index, 1);
    },
    onClickAdBlockFile(index) {
      this.$refs.fileInputAdBlock[index].click();
    },
    onFileAdBlockPicked(index) {
      var files = this.$refs.fileInputAdBlock[index].files;
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
              this.form.adBlock[index].image = data.data.data[0];
            }
          });
        }
      } else {
        this.$toaster.error("Select Image");
      }
    },
    onClickGalleryFile(index) {
      this.$refs.fileInputGallery[index].click();
    },
    onFileGalleryPicked(index) {
      var files = this.$refs.fileInputGallery[index].files;
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
              this.form.gallery[index].image = data.data.data[0];
            }
          });
        }
      } else {
        this.$toaster.error("Select Image");
      }
    },
    onClickBannerFile(index) {
      this.$refs.fileInputBanner[index].click();
    },
    onFileBannerPicked(index) {
      var files = this.$refs.fileInputBanner[index].files;
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
              this.form.banner[index].image = data.data.data[0];
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
label {
  font-weight: bold;
}
.bg-box {
  background: #f5f5f5;
  padding: 10px;
}
</style>
