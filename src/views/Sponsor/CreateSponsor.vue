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
                <h5 class="card-title m-0">Create Sponsor</h5>
              </div>
              <div class="p-3">
                <b-form @reset="onReset" v-if="show">
                  <b-form-group>
                    <label for="name">
                      Name:
                      <span>*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="name  "
                      type="text"
                      v-model="form.name"
                      placeholder="Enter Name"
                    />
                  </b-form-group>

                  <b-form-group>
                    <label for="SponsorType">Sponsor Type:</label>
                    <b-form-input
                      class="rounded-0"
                      id="SponsorType"
                      type="text"
                      v-model="form.sponsorType"
                      placeholder="Enter Sponsor Type"
                    />
                  </b-form-group>

                  <b-form-group>
                    <label for="owner">Owner Name:</label>
                    <b-form-input
                      class="rounded-0"
                      id="owner"
                      type="text"
                      v-model="form.ownerName"
                      placeholder="Enter Owner Name"
                    />
                  </b-form-group>

                  <b-form-group>
                    <label for="logo">
                      Logo:
                      <span>*</span>
                    </label>
                    <div class>
                      <b-button raised class="primary mb-2" @click="onClickFile">Upload Logo</b-button>
                      <input
                        type="file"
                        style="display:none"
                        ref="fileInput"
                        accept="image/*"
                        @change="onFilePicked"
                      />
                    </div>
                    <div class>
                      <span>
                        <font
                          color="red"
                          class="note mb-2"
                        >Please Upload (480 x 480 or 300 x 300)px PNG image</font>
                      </span>
                    </div>
                    <img
                      :src="form.logo | serverimage"
                      width="100px"
                      height="auto"
                      v-if="form.logo"
                    />
                  </b-form-group>

                  <b-form-group>
                    <label for="link">Link:</label>
                    <b-form-input
                      class="rounded-0"
                      id="link"
                      type="text"
                      v-model="form.link"
                      placeholder="Enter Link"
                    />
                  </b-form-group>

                  <b-form-group>
                    <label for="order">
                      Order:
                      <span>*</span>
                    </label>
                    <b-form-input
                      class="rounded-0"
                      id="order"
                      type="number"
                      min="1"
                      v-model.number="form.order"
                      placeholder="Enter Order"
                    />
                  </b-form-group>

                  <b-form-group>
                    <label for="typeSponsor">
                      Sponsor Section
                      <span>*</span>
                    </label>
                    <b-form-select v-model="form.typeSponsor" id="typeSponsor">
                      <option value="Big">Big</option>
                      <option value="Medium">Medium</option>
                      <option value="Small">Small</option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <label for="status">
                      Status:
                      <span>*</span>
                    </label>
                    <b-form-checkbox class="rounded-0" id="status" v-model="form.active" />
                  </b-form-group>

                  <b-form-group class="text-center">
                    <div v-if="showError" class="error">
                      <strong>Required fields are missing.</strong>
                    </div>
                  </b-form-group>

                  <!--End -->

                  <b-form-group class="text-center">
                    <b-button @click="onSubmit" variant="primary" class="mr-2 px-3 rounded-0">Submit</b-button>
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
          text: "Sponsor",
          href: "/view-sponsor"
        },
        {
          text: "Create Sponsor"
        }
      ],
      form: {
        name: "",
        ownerName: "",
        sponsorType: "",
        typeSponsor: "",
        logo: "",
        link: "",
        order: 0,
        active: true
      },
      options: [],
      show: true,
      showError: false
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(this.form);
      if (
        !this.form.name ||
        // !this.form.logo ||
        !this.form.order ||
        (this.form.active != false && this.form.active != true)
      ) {
        this.showError = true;
        this.$toaster.error("Required fields are missing.");
      } else {
        this.showError = false;
        // console.log(this.form);
        service.saveSponsor(this.form, data => {
          if (data.data) {
            this.$router.push("/view-sponsor");
          }
        });
      }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.name = "";
      this.form.ownerName = "";
      this.form.sponsorType = "";
      this.form.typeSponsor = "";
      this.form.logo = "";
      this.form.link = "";
      this.form.active = true;
      delete this.form.order;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    goToPage() {
      this.$router.push("/view-sponsor");
    },
    onClickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please Add Valid File!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      const formData = new FormData();
      formData.append("file", this.image);
      service.upload(formData, data => {
        if (data.data.data) {
          this.form.logo = data.data.data[0];
        }
      });
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
.custom-control-label:after,
.custom-control-label:before {
  width: 2rem !important;
  height: 2rem !important;
}
</style>
