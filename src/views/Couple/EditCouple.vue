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
                <h5 class="card-title m-0">Edit Couple</h5>
                <!-- <h4>Edit Couple</h4> -->
              </div>
              <div class="p-3">
                <b-form name="form" @submit="onSubmit" v-if="show">
                  <b-form-group label="Registration Date:" label-for="registrationDate">
                    <b-form-input
                      id="registrationDate"
                      v-model="registeredDate"
                      type="text"
                      readOnly
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Company Details" class="text-center"></b-form-group>

                  <b-form-group>
                    <div class="d-flex">
                      <div class="w-50">
                        <!-- Company Name -->
                        <b-form-group label="Company Name:" label-for="companyName">
                          <b-form-input
                            id="companyName"
                            v-model="form.company.name"
                            type="text"
                            placeholder="Enter Name"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="w-50 ml-4">
                        <!-- Type of Business -->
                        <b-form-group label="Company Address:" label-for="officeAddress">
                          <b-form-textarea
                            id="officeAddress"
                            v-model="form.company.address"
                            type="text"
                            rows="3"
                            max-rows="6"
                            placeholder="Enter Office Address"
                          ></b-form-textarea>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>

                  <b-form-group label="Candidate Details" class="text-center"></b-form-group>

                  <!-- first name -->
                  <b-form-group label="First Name:" label-for="firstName">
                    <b-form-input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      placeholder="Enter First Name"
                    ></b-form-input>
                  </b-form-group>

                  <!-- middle name -->
                  <b-form-group label="Middle Name:" label-for="middleName">
                    <b-form-input
                      id="middleName"
                      type="text"
                      v-model="form.middleName"
                      placeholder="Enter Middle Name"
                    ></b-form-input>
                  </b-form-group>

                  <!-- last name -->
                  <b-form-group label="Surname:" label-for="surname">
                    <b-form-input
                      id="surname"
                      type="text"
                      v-model="form.surname"
                      placeholder="Enter Surname"
                    ></b-form-input>
                  </b-form-group>

                  <!-- email and mobile -->
                  <b-form-group>
                    <div class="d-flex w-50">
                      <!-- email -->
                      <div class="w-50">
                        <b-form-group label="Email" label-for="email">
                          <b-form-input
                            id="email"
                            type="email"
                            v-model="form.email"
                            placeholder="Enter Email"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <!-- mobile no -->
                      <div class="ml-4 w-50">
                        <b-form-group label="Mobile No" label-for="mobile">
                          <b-form-input
                            id="mobile"
                            type="text"
                            v-model="form.mobile"
                            maxLength="10"
                            placeholder="Enter Mobile No"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>

                  <!-- date -->
                  <b-form-group>
                    <div class="d-flex w-50">
                      <div class="w-50">
                        <b-form-group class id="calendar" name="calendar" label="Date Of Birth">
                          <date-picker
                            v-model="form.dob"
                            v-on:change="selectDate(form.dob)"
                            type="number"
                            :lang="'en'"
                            :first-day-of-week="1"
                            :format="'DD-MM-YYYY'"
                            class
                            :placeholder="'Select Date'"
                          ></date-picker>
                        </b-form-group>
                      </div>
                      <div class="ml-4 w-50">
                        <b-form-group></b-form-group>
                        <!-- <b-form-group label="age" label-for="age">
                          <b-form-input
                            id="age"
                            type="text"
                            v-model="form.age"
                            placeholder="age"
                          ></b-form-input>
                        </b-form-group> -->
                      </div>
                    </div>
                  </b-form-group>

                  <b-form-group label="Profile Picture:" label-for="profile">
                    <b-button
                      id="profile"
                      raised
                      @click="onClickProfileFile()"
                      variant="primary"
                      type="button"
                      >Upload</b-button
                    >
                    <input
                      type="file"
                      name="profile"
                      style="display:none"
                      ref="fileInputProfile"
                      accept="image/*"
                      @input="onFileProfilePicked()"
                    />
                    <div class="my-1" v-if="showPhotograph">
                      <img :src="form.photograph | serverimage" width="100" height="auto" alt />
                    </div>
                  </b-form-group>

                  <b-form-group label="Identity Proof:" label-for="identityProof">
                    <b-button
                      id="identity"
                      raised
                      @click="onClickIdentityFile()"
                      variant="primary"
                      type="button"
                      >Upload</b-button
                    >
                    <input
                      type="file"
                      name="identity"
                      style="display:none"
                      ref="fileInputIdentity"
                      accept="image/*"
                      @input="onFileIdentityPicked()"
                    />
                    <div class="my-1" v-if="showIdProof">
                      <img :src="form.idProof | serverimage" width="100" height="auto" alt />
                    </div>
                  </b-form-group>

                  <b-form-group label="Spouse Details" class="text-center"></b-form-group>

                  <!-- first name -->
                  <b-form-group label="First Name:" label-for="spouseFirstName">
                    <b-form-input
                      id="spouseFirstName"
                      v-model="form.spouse.firstName"
                      type="text"
                      placeholder="Enter Spouse First Name"
                    ></b-form-input>
                  </b-form-group>

                  <!-- middle name -->
                  <b-form-group label="Middle Name:" label-for="spouseMiddleName">
                    <b-form-input
                      id="spouseMiddleName"
                      type="text"
                      v-model="form.spouse.middleName"
                      placeholder="Enter Spouse Middle Name"
                    ></b-form-input>
                  </b-form-group>

                  <!-- last name -->
                  <b-form-group label="Surname:" label-for="spouseSurname">
                    <b-form-input
                      id="spouseSurname"
                      type="text"
                      v-model="form.spouse.surname"
                      placeholder="Enter Spouse Surname"
                    ></b-form-input>
                  </b-form-group>

                  <!-- email and mobile -->
                  <b-form-group>
                    <div class="d-flex w-50">
                      <!-- email -->
                      <div class="w-50">
                        <b-form-group label="Email" label-for="spouse-email">
                          <b-form-input
                            id="spouse-email"
                            type="email"
                            v-model="form.spouse.email"
                            placeholder="Enter Spouse Email"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <!-- mobile no -->
                      <div class="ml-4 w-50">
                        <b-form-group label="Mobile No" label-for="spouse-mobile">
                          <b-form-input
                            id="spouse-mobile"
                            type="text"
                            v-model="form.spouse.mobile"
                            maxLength="10"
                            placeholder="Enter Spouse Mobile No"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>

                  <!-- date -->
                  <b-form-group>
                    <div class="d-flex w-50">
                      <div class="w-50">
                        <b-form-group
                          class
                          id="spouse-calendar"
                          name="calendar"
                          label="Date Of Birth"
                        >
                          <date-picker
                            v-model="form.spouse.dob"
                            v-on:change="selectSpouseDate(form.spouse.dob)"
                            type="number"
                            :lang="'en'"
                            :first-day-of-week="1"
                            :format="'DD-MM-YYYY'"
                            class
                            :placeholder="'Select Spouse DOB'"
                          ></date-picker>
                        </b-form-group>
                      </div>
                      <div class="ml-4 w-50">
                        <!-- <b-form-group label="age" label-for="age">
                          <b-form-input
                            id="age"
                            type="text"
                            v-model="form.age"
                            placeholder="age"
                          ></b-form-input>
                        </b-form-group> -->
                      </div>
                    </div>
                  </b-form-group>

                  <b-form-group label="Profile Picture:" label-for="spouse-profile">
                    <b-button
                      id="spouse-profile"
                      raised
                      @click="onClickSpouseProfileFile()"
                      variant="primary"
                      type="button"
                      >Upload</b-button
                    >
                    <input
                      type="file"
                      name="spouse-profile"
                      style="display:none"
                      ref="fileInputSpouseProfile"
                      accept="image/*"
                      @input="onFileSpouseProfilePicked()"
                    />
                    <div class="my-1" v-if="showSpousePhotograph">
                      <img
                        :src="form.spouse.photograph | serverimage"
                        width="100"
                        height="auto"
                        alt
                      />
                    </div>
                  </b-form-group>

                  <b-form-group label="Identity Proof:" label-for="spouseIdentityProof">
                    <b-button
                      id="spouse-identity"
                      raised
                      @click="onClickSpouseIdentityFile()"
                      variant="primary"
                      type="button"
                      >Upload</b-button
                    >
                    <input
                      type="file"
                      name="spouse-identity"
                      style="display:none"
                      ref="fileInputSpouseIdentity"
                      accept="image/*"
                      @input="onFileSpouseIdentityPicked()"
                    />
                    <div class="my-1" v-if="showSpouseIdProof">
                      <img :src="form.spouse.idProof | serverimage" width="100" height="auto" alt />
                    </div>
                  </b-form-group>

                  <b-form-group label="Additional Details" class="text-center"></b-form-group>

                  <b-form-group label="Payment Method:" label-for="paymentMethod">
                    <b-form-select
                      id="paymentMethod"
                      v-model="form.paymentMethod"
                      label="text"
                      :value="value"
                      :options="paymentMethodOptions"
                    ></b-form-select>
                  </b-form-group>
                  <b-form-group label="Payment Status:" label-for="paymentStatus">
                    <b-form-select
                      id="paymentStatus"
                      v-model="form.paymentStatus"
                      label="text"
                      :value="value"
                      :options="paymentStatusOptions"
                    ></b-form-select>
                  </b-form-group>
                  <b-form-group label="Transaction Id:" label-for="transactionId">
                    <b-form-input
                      id="transactionId"
                      v-model="form.transactionId"
                      type="text"
                      placeholder="Enter Transaction Id"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group>
                    <div class="d-flex">
                      <div class="w-90">
                        <!-- Shirt Size -->
                        <b-form-group label="Remark" label-for="remark">
                          <b-form-input
                            id="remark"
                            v-model="form.remark"
                            type="text"
                            placeholder="Enter Remark"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>

                  <!-- submit and reset button -->
                  <b-form-group class="text-center">
                    <b-button variant="primary" type="submit" class="mr-2 px-3 rounded-0"
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
import DatePicker from "vue2-datepicker";
import { Multiselect } from "vue-multiselect";
import { VueTelInput } from "vue-tel-input";
import moment from "moment";
import service from "@/service/apiService";
import Sidemenu from "@/components/sidemenu-section.vue";
import HeaderSection from "@/components/header-section.vue";

export default {
  components: {
    DatePicker,
    Multiselect,
    VueTelInput,
    HeaderSection,
    Sidemenu
  },
  data() {
    return {
      showForm: false,
      showError: false,
      showPhotograph: true,
      showIdProof: true,
      showSpousePhotograph: true,
      showSpouseIdProof: true,
      search: {},
      coupleOptions: [],
      registeredDate: "",
      max: 11,
      bootstrapBtnPromise: "",
      submitStatus: "true",
      removeText: "true",

      paymentMethodOptions: [
        { value: "Cash", text: "Cash" },
        { value: "Online", text: "Online" }
      ],

      paymentStatusOptions: [
        { value: "Pending", text: "Pending" },
        { value: "Paid", text: "Paid" }
      ],
      showMessage: false,
      message: "",
      form: {
        firstName: "",
        middleName: "",
        surname: "",
        email: "",
        dob: "",
        mobile: "",
        photograph: "",
        idProof: "",
        spouse: {
          firstName: "",
          middleName: "",
          surname: "",
          email: "",
          dob: "",
          mobile: "",
          photograph: "",
          idProof: ""
        },
        company: {
          name: "",
          address: ""
        },
        paymentStatus: "Pending",
        paymentMethod: "Online",
        transactionId: ""
      },

      // date picker script
      value: "",
      time1: "",
      time2: "",
      time3: "",
      // custom lang
      lang: {
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        pickers: [
          "next 7 days",
          // "next 30 days",
          "previous 7 days",
          "previous 30 days"
        ]
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: "Today",
          onClick: () => {
            this.time3 = [new Date(), new Date()];
          }
        }
      ],
      error: [],
      breadCrum: [
        {
          text: "Couple",
          href: "/view-couple"
        },
        {
          text: "Edit Couple"
        }
      ],
      show: true
    };
  },
  created() {
    this.getOne();
  },
  methods: {
    getOne() {
      if (this.$route.params.id) {
        service.getOneCouple(this.$route.params.id, data => {
          this.form = data.data;
          this.registeredDate = moment(this.form.registrationDate).format("DD/MM/YYYY");
          if (data.data.company) {
            this.form.company = data.data.company;
          } else {
            this.form.company = {};
          }

          if (data.data.spouse) {
            this.form.spouse = data.data.spouse;
          } else {
            this.form.spouse = {};
          }

          if (data.data.mobile) {
            this.form.mobile = data.data.mobile.toString();
          } else {
            this.form.mobile = "";
          }

          if (data.data.spouse.mobile) {
            this.form.spouse.mobile = data.data.spouse.mobile.toString();
          } else {
            this.form.spouse.mobile = "";
          }

          this.selectDate(data.data.dob);

          this.selectSpouseDate(data.data.spouse.dob);

          if (data.data.paymentStatus) {
            this.form.paymentStatus = data.data.paymentStatus;
          } else {
            this.form.paymentStatus = "Pending";
          }

          if (data.data.paymentMethod) {
            this.form.paymentMethod = data.data.paymentMethod;
          } else {
            this.form.paymentMethod = "Online";
          }
        });
      }
    },
    onSubmit(e) {
      e.preventDefault();
      const obj = _.cloneDeep(this.form);
      obj.mobile = parseInt(obj.mobile);
      obj.spouse.mobile = parseInt(obj.spouse.mobile);
      service.updateCouple(this.$route.params.id, obj, data => {
        if (data.data) {
          this.$router.push("/view-couple");
        }
      });
    },
    onCancel() {
      this.$router.push("/view-couple");
    },

    onClickProfileFile() {
      console.log(this.$refs);
      this.$refs.fileInputProfile.click();
    },
    onFileProfilePicked() {
      const { files } = this.$refs.fileInputProfile;
      if (files && files.length > 0 && files[0].name) {
        const filename = files[0].name;
        if (filename.lastIndexOf(".") <= 0) {
          this.$toasted.error("Please Add Valid File!");
        } else if (files[0].size > 1024 * 1024) {
          this.$toasted.error("Image size is greater than 1 MB");
        } else {
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
              this.$toasted.success("Profile Image Uploaded Successfully");
              this.showPhotograph = true;
              this.form.photograph = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Profile Image");
      }
    },
    onClickIdentityFile() {
      this.$refs.fileInputIdentity.click();
    },
    onFileIdentityPicked() {
      const { files } = this.$refs.fileInputIdentity;
      if (files && files.length > 0 && files[0].name) {
        const filename = files[0].name;
        if (filename.lastIndexOf(".") <= 0) {
          this.$toasted.error("Please Add Valid File!");
        } else if (files[0].size > 1024 * 1024) {
          this.$toasted.error("Image size is greater than 1 MB");
        } else {
          const fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            this.imageUrl = fileReader.result;
          });
          fileReader.readAsDataURL(files[0]);
          this.image = files[0];
          const formData = new FormData();
          formData.append("file", this.image);
          service.upload(formData, data => {
            console.log(data);
            if (data.data.data) {
              this.$toasted.success("Identity Image Uploaded Successfully");
              this.showIdProof = true;
              this.form.idProof = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Image");
      }
    },
    onClickSpouseProfileFile() {
      console.log(this.$refs);
      this.$refs.fileInputSpouseProfile.click();
    },
    onFileSpouseProfilePicked() {
      const { files } = this.$refs.fileInputSpouseProfile;
      if (files && files.length > 0 && files[0].name) {
        const filename = files[0].name;
        if (filename.lastIndexOf(".") <= 0) {
          this.$toasted.error("Please Add Valid File!");
        } else if (files[0].size > 1024 * 1024) {
          this.$toasted.error("Image size is greater than 1 MB");
        } else {
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
              this.$toasted.success("Spouse Profile Image Uploaded Successfully");
              this.showSpousePhotograph = true;
              this.form.spouse.photograph = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Spouse Profile Image");
      }
    },
    onClickSpouseIdentityFile() {
      this.$refs.fileInputSpouseIdentity.click();
    },
    onFileSpouseIdentityPicked() {
      const { files } = this.$refs.fileInputSpouseIdentity;
      if (files && files.length > 0 && files[0].name) {
        const filename = files[0].name;
        if (filename.lastIndexOf(".") <= 0) {
          this.$toasted.error("Please Add Valid File!");
        } else if (files[0].size > 1024 * 1024) {
          this.$toasted.error("Image size is greater than 1 MB");
        } else {
          const fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            this.imageUrl = fileReader.result;
          });
          fileReader.readAsDataURL(files[0]);
          this.image = files[0];
          const formData = new FormData();
          formData.append("file", this.image);
          service.upload(formData, data => {
            console.log(data);
            if (data.data.data) {
              this.$toasted.success("Spouse Identity Image Uploaded Successfully");
              this.showSpouseIdProof = true;
              this.form.spouse.idProof = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Spouse Image");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/scss/import";
$heading-bg-color: #03a9f4 !default;
$page-bg-color: #ddd !default;
$fg-color: #fdfdfd !default;
$base-font-size: 16px !default;
$inverted-corner: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path fill="#03a9f4" id="concaveCurve" fill-rule="evenodd" d="M0 0c100 0 100 100 100 100V0z"/></svg>');
$black: black !default;
$white: white !default;
$light-white: #ffffffa6 !default;
$red: red !default;
$sky-blue: #03a9f4 !default;
$light-black: #333 !default;
$pink: rgba(223, 39, 230, 0.767) !default;
$blue: rgba(23, 39, 185, 0.755) !default;
$box-shadow-color: rgba(0, 0, 0, 0.56) !default;
$box-shadow-color2: rgba(0, 0, 0, 0.76) !default;
$header-footer: #161616 !default;
$bg-light: #d9d9d9 !default;
$header-footer-hover: #e1c7c7 !default;
$text-color: #d0e1ce !default;
$button-border: #cfd4da !default;
$font-size-base: 1rem !default; // Assumes the browser default, typically `16px`
$font-size-lg: 1.25rem !default;
$font-size-sm: 0.875rem !default;
$font-size-xs: 0.75rem !default;
$bgcolor: #263973 !default;

.error-txt {
  list-style-type: none;
  color: $red;
  padding: 0;
}
.tab-heading.inception.main-head {
  color: #2c3e50;
  justify-content: center;
}
.mask-input {
  background-color: transparent;
  border: 1px solid $black !important;
  display: block;
  width: 50%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  border-radius: 0.25rem;
}
.w-90 {
  width: 90%;
}
.error-txt {
  color: $red;
  text-transform: capitalize;
}

.main-form-section {
  color: $black !important;
}

*:focus {
  outline: 0;
}

.card {
  font-size: 1.1rem;
  font-weight: 400;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 3rem;
  margin-top: 7rem;
  padding: 0 0 1rem 0;
  width: 100%;
  box-shadow: 0.3rem 1.3rem 2rem 2px rgba(56, 65, 56, 0.41);
  background-color: $light-white;
  p {
    margin: 0 1rem 1rem 1rem;
    color: $light-black;
    font-size: 1.2rem;
    font-weight: 300;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.tab-heading {
  font-family: "Open Sans";
  font-weight: 600;
  border-top: 0.3rem solid rgba(34, 66, 128, 0.24);
  margin: 0 0 1rem 0;
  color: $fg-color;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;

  position: relative;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    background-image: $inverted-corner;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -1px;
  }
  &:before {
    margin: 0 0 0 1rem;
  }
  &:after {
    transform: rotateZ(270deg);
  }
  .text {
    display: block;
    background-color: rgba(34, 66, 128, 0.24);
    padding: 0.2rem 1rem 0.5rem;
    border-color: rgba(34, 66, 128, 0.24);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
    box-shadow: 0.1rem 0.4rem 0.5rem -3px $box-shadow-color;
    margin-top: -1px;
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
    }
    &:before {
      bottom: 0.4rem;
      right: 0.9rem;
      width: 75%;
      height: 1.6rem;
      box-shadow: 0.8rem 0.4rem 1rem -0.9px $box-shadow-color2;
      transform: rotate(6deg);
      border-bottom-right-radius: 1rem;
    }
    &:after {
      top: -0.7rem;
      right: 0.65rem;
      transform: rotate(20deg);
      content: "(";
      color: transparent;
      font-size: 1.7rem;
      font-weight: 900;
      text-shadow: 1rem 0 0.4rem $black;
    }
  }
}
</style>
