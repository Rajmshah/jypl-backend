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
                <h5 class="card-title m-0">Edit Player</h5>
                <!-- <h4>Edit Player</h4> -->
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

                  <!-- address -->

                  <b-form-group label="Address:" label-for>
                    <b-form-textarea
                      id="textarea"
                      v-model="form.address"
                      placeholder="Enter something..."
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
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
                        <b-form-group label="age" label-for="age">
                          <b-form-input
                            id="age"
                            type="text"
                            v-model="form.age"
                            placeholder="age"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>

                  <b-form-group>
                    <div class="d-flex">
                      <div class="w-50">
                        <!-- Company Name -->
                        <b-form-group label="Name:" label-for="companyName">
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
                        <b-form-group label="Type of Business:" label-for="businessType">
                          <b-form-input
                            id="businessType"
                            v-model="form.company.businessType"
                            type="text"
                            placeholder="Enter Type of Business"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>
                  <b-form-group>
                    <div class="d-flex">
                      <div class="w-50">
                        <!-- Designation -->
                        <b-form-group label="Designation:" label-for="designation">
                          <b-form-input
                            id="designation"
                            v-model="form.company.designation"
                            type="text"
                            placeholder="Enter Designation"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="w-50 ml-4">
                        <!-- Your Relationship -->
                        <b-form-group label="Your Relationship:" label-for="relationship">
                          <b-form-input
                            id="relationship"
                            v-model="form.company.relationship"
                            type="text"
                            placeholder="Enter Your Relationship"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>
                  <!-- Office Address -->
                  <b-form-group label="Address:" label-for="officeAddress">
                    <b-form-textarea
                      id="officeAddress"
                      v-model="form.company.address"
                      type="text"
                      rows="3"
                      max-rows="6"
                      placeholder="Enter Office Address"
                    ></b-form-textarea>
                  </b-form-group>

                  <!-- Key Role -->

                  <b-form-group label="Key Role:" label-for="role">
                    <div class="w-50">
                      <b-form-select
                        id="role"
                        v-model="form.keyRole"
                        label="text"
                        :value="value"
                        :options="keyRoleOptions"
                      ></b-form-select>
                    </div>
                  </b-form-group>

                  <b-form-group>
                    <div class="d-flex">
                      <div class="w-90">
                        <!-- Batting Style -->
                        <b-form-group label="Batting Style:" label-for="bat">
                          <b-form-select
                            id="bat"
                            v-model="form.battingType"
                            label="text"
                            :value="value"
                            :options="battingOptions"
                          ></b-form-select>
                        </b-form-group>
                      </div>
                      <div class="w-90 ml-4">
                        <!-- Bowling Style -->
                        <b-form-group label="Bowling Style:" label-for="bowl">
                          <b-form-select
                            id="bowl"
                            v-model="form.bowlingType"
                            label="text"
                            :value="value"
                            :options="bowlingOptions"
                          ></b-form-select>
                        </b-form-group>
                      </div>
                      <div class="w-90 ml-4">
                        <!-- Wicket Keeper -->
                        <b-form-group label="Wicket Keeper:" label-for="wk">
                          <b-form-select
                            id="wk"
                            v-model="form.isWicketkeeper"
                            label="text"
                            :value="value"
                            :options="booleanOptions"
                          ></b-form-select>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>

                  <b-form-group>
                    <div class="d-flex">
                      <div class="w-50">
                        <!-- Played Last Year -->
                        <b-form-group label="Played Last Year:" label-for="played">
                          <b-form-select
                            id="played"
                            v-model="form.hasPlayed"
                            label="text"
                            :value="value"
                            :options="booleanOptions"
                          ></b-form-select>
                        </b-form-group>
                      </div>
                      <div class="w-50 ml-4">
                        <!-- Team -->
                        <b-form-group label="Team:" label-for="team">
                          <multiselect
                            id="team"
                            v-model="form.team"
                            placeholder="Search and Select a team"
                            label="name"
                            track-by="name"
                            class="w-50"
                            :options="teamOptions"
                          ></multiselect>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>

                  <!-- Jersey Name -->
                  <b-form-group label="Jersey Name:" label-for="jerseyName">
                    <b-form-input
                      id="jerseyName"
                      v-model="form.jerseyName"
                      type="text"
                      placeholder="Enter Jersey Name"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group>
                    <div class="d-flex">
                      <div class="w-90">
                        <!-- Shirt Size -->
                        <b-form-group label="T-Shirt Size" label-for="shirt">
                          <b-form-select
                            id="shirt"
                            v-model="form.shirtSize"
                            label="text"
                            :value="value"
                            :options="shirtOptions"
                          ></b-form-select>
                        </b-form-group>
                      </div>
                      <div class="w-90 ml-4">
                        <!-- Trouser Size -->
                        <b-form-group label="Trouser Size" label-for="trouser">
                          <b-form-select
                            id="trouser"
                            v-model="form.trouserSize"
                            label="text"
                            :value="value"
                            :options="trouserOptions"
                          ></b-form-select>
                        </b-form-group>
                      </div>
                      <div class="w-90 ml-4">
                        <!-- Track Length -->
                        <b-form-group label="Track Length" label-for="track">
                          <b-form-select
                            id="track"
                            v-model="form.trackLength"
                            label="text"
                            :value="value"
                            :options="trackOptions"
                          ></b-form-select>
                        </b-form-group>
                      </div>
                    </div>
                  </b-form-group>

                  <b-form-group>
                    <div class="d-flex w-50">
                      <div class="w-50">
                        <!-- Owner -->
                        <b-form-group label="Owner" label-for="owner">
                          <b-form-select
                            id="owner"
                            v-model="form.beOwner"
                            label="text"
                            :value="value"
                            :options="booleanOptions"
                          ></b-form-select>
                        </b-form-group>
                      </div>
                      <div class="w-50 ml-4">
                        <!-- Sponsor -->
                        <b-form-group label="Sponsor" label-for="sponsor">
                          <b-form-select
                            id="sponsor"
                            v-model="form.beSponsor"
                            label="text"
                            :value="value"
                            :options="booleanOptions"
                          ></b-form-select>
                        </b-form-group>
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
                  <b-form-group label="Business Card:" label-for="businessCard">
                    <b-button
                      id="businessCard"
                      raised
                      @click="onClickCardFile()"
                      variant="primary"
                      type="button"
                      >Upload</b-button
                    >
                    <input
                      type="file"
                      name="businessCard"
                      style="display:none"
                      ref="fileInputCard"
                      accept="image/*"
                      @input="onFileCardPicked()"
                    />
                    <div class="my-1" v-if="showBusinessCard">
                      <img :src="form.businessCard | serverimage" width="100" height="auto" alt />
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
      showBusinessCard: true,
      showIdProof: true,
      search: {},
      playerOptions: [],
      teamOptions: [
        {
          name: ""
        }
      ],
      registeredDate: "",
      max: 11,
      bootstrapBtnPromise: "",
      submitStatus: "true",
      removeText: "true",

      conditionOptions: [
        {
          text: "I have read and accept the ",
          value: "two",
          showModal: true
        }
      ],

      booleanOptions: [
        { value: true, text: "Yes" },
        { value: false, text: "No" }
      ],

      paymentMethodOptions: [
        { value: "Cash", text: "Cash" },
        { value: "Online", text: "Online" }
      ],

      paymentStatusOptions: [
        { value: "Pending", text: "Pending" },
        { value: "Paid", text: "Paid" }
      ],

      keyRoleOptions: [
        { value: "Batsman", text: "Batsman" },
        { value: "Bowler", text: "Bowler" },
        { value: "All Rounder", text: "All Rounder" }
      ],

      battingOptions: [
        { value: "Left Hand", text: "Left Hand" },
        { value: "Right Hand", text: "Right Hand" }
      ],

      bowlingOptions: [
        { value: "Right Arm Medium Pace", text: "Right Arm Medium Pace" },
        { value: "Left Arm Medium Pace", text: "Left Arm Medium Pace" },
        { value: "Left Arm Spin", text: "Left Arm Spin" },
        { value: "Right Arm Off Spin", text: "Right Arm Off Spin" },
        { value: "Right Arm Leg Spin", text: "Right Arm Leg Spin" },
        { value: "None", text: "None" }
      ],

      trackOptions: [
        { value: "37", text: "37" },
        { value: "38", text: "38" },
        { value: "39", text: "39" },
        { value: "40", text: "40" },
        { value: "41", text: "41" },
        { value: "42", text: "42" },
        { value: "43", text: "43" },
        { value: "44", text: "44" },
        { value: "45", text: "45" },
        { value: "46", text: "46" },
        { value: "47", text: "47" }
      ],

      trouserOptions: [
        { value: "26", text: "26" },
        { value: "28", text: "28" },
        { value: "30", text: "30" },
        { value: "32", text: "32" },
        { value: "34", text: "34" },
        { value: "36", text: "36" },
        { value: "38", text: "38" },
        { value: "40", text: "40" },
        { value: "42", text: "42" },
        { value: "44", text: "44" }
      ],

      shirtOptions: [
        { value: "30", text: "30" },
        { value: "32", text: "32" },
        { value: "34", text: "34" },
        { value: "36", text: "36" },
        { value: "38", text: "38" },
        { value: "40", text: "40" },
        { value: "42", text: "42" },
        { value: "44", text: "44" },
        { value: "46", text: "46" },
        { value: "48", text: "48" }
      ],
      showMessage: false,
      message: "",
      form: {
        firstName: "",
        middleName: "",
        surname: "",
        email: "",
        dob: "",
        age: "",
        mobile: "",
        photograph: "",
        idProof: "",
        businessCard: "",
        team: "",
        address: "",
        company: {
          name: "",
          businessType: "",
          designation: "",
          relationship: "",
          address: ""
        },
        jerseyName: "",
        keyRole: "",
        hasPlayed: false,
        bowlingType: "",
        battingType: "",
        isWicketkeeper: false,
        beOwner: false,
        beSponsor: false,
        shirtSize: "",
        trouserSize: "",
        paymentStatus: "Pending",
        paymentMethod: "Online",
        transactionId: "",
        trackLength: "",
        condition: [],
        checked: []
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
          text: "Player",
          href: "/view-player"
        },
        {
          text: "Edit Player"
        }
      ],
      show: true
    };
  },
  created() {
    this.getOne();
    this.getTeamList();
  },
  methods: {
    getOne() {
      if (this.$route.params.id) {
        service.getOnePlayer(this.$route.params.id, data => {
          this.form = data.data;
          this.registeredDate = moment(this.form.registrationDate).format("DD/MM/YYYY");
          if (data.data.company) {
            this.form.company = data.data.company;
          } else {
            this.form.company = {};
          }
          if (data.data.mobile) {
            this.form.mobile = data.data.mobile.toString();
          } else {
            this.form.mobile = "";
          }

          this.selectDate(data.data.dob);

          if (data.data.team) {
            this.form.team = { name: data.data.team };
          }
          
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
    getTeamList() {
      service.searchTeamList({}, teamList => {
        this.teamOptions = teamList.data;
      });
    },
    onSubmit(e) {
      e.preventDefault();
      const obj = _.cloneDeep(this.form);
      if (obj.team) {
        obj.team = obj.team.name;
      }
      obj.mobile = parseInt(obj.mobile);
      service.updatePlayer(this.$route.params.id, obj, data => {
        if (data.data) {
          this.$router.push("/view-player");
        }
      });
    },
    onCancel() {
      this.$router.push("/view-player");
    },

    selectDate(value) {
      this.form.age = moment(new Date()).format("YYYY") - moment(value).format("YYYY");
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
    onClickCardFile() {
      this.$refs.fileInputCard.click();
    },
    onFileCardPicked() {
      const { files } = this.$refs.fileInputCard;
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
              this.$toasted.success("Business Card Image Uploaded Successfully");
              this.showBusinessCard = true;
              this.form.businessCard = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Image");
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
