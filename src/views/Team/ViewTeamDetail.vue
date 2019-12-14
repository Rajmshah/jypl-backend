<template>
  <div>
    <!-- header -->
    <header>
      <header-section></header-section>
    </header>
    <!-- header end -->
    <div class="d-flexs">
      <!-- sidemenu -->
      <sidemenu class="bg-dark"></sidemenu>
      <!-- sidemenu end-->
      <div class="main-content bg-light">
        <div class="container-fluid basic-table my-3">
          <div class="card rounded-0 mb-5">
            <div class="p-0 rounded-0">
              <table class="mb-0 table table-hover table-striped">
                <thead>
                  <tr class="table-body-header rounded-0">
                    <th
                      class="text-uppercase text-blue"
                      v-for="tableHeader in teamTableHeaders"
                      v-bind:key="tableHeader.tableHeaderName"
                    >
                      {{ tableHeader.tableHeaderName }}
                    </th>
                  </tr>
                </thead>
                <tbody class="p-0">
                  <!-- <div class="text-center font-size-lg" v-if="!allUser.length">No data found.</div> -->
                  <tr class="table-body-contents" v-if="!teamDetail">
                    <td class="text-center font-size-md font-weight-bold text-muted" colspan="3">
                      <b-spinner
                        class="justify-content-md-center text-blue"
                        v-if="!dataFound"
                      ></b-spinner>
                      <div class="justify-content-md-center text-blue" v-else-if="dataFound">
                        No data found
                      </div>
                    </td>
                  </tr>

                  <tr class="table-body-contents">
                    <td>{{ teamDetail.name || "-" }}</td>
                    <td>{{ teamDetail.village || "-" }}</td>
                    <td v-if="teamDetail.logo">
                      <img
                        :src="teamDetail.logo | serverimage"
                        width="100"
                        height="auto"
                        :alt="teamDetail.name"
                      />
                    </td>
                    <td v-if="!teamDetail.logo">-</td>
                  </tr>
                  <viewImage
                    class="text-center"
                    v-bind:data="{
                      id: id
                    }"
                  ></viewImage>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card rounded-0">
            <div class="p-0 rounded-0">
              <div class="card-header">
                <!-- search  -->
                <h5 class="card-title m-0">Players</h5>
              </div>
              <table class="mb-0 table table-hover table-striped">
                <thead>
                  <tr class="table-body-header rounded-0">
                    <th
                      class="text-uppercase text-blue"
                      v-for="tableHeader in tableHeaders"
                      v-bind:key="tableHeader.tableHeaderName"
                    >
                      {{ tableHeader.tableHeaderName }}
                    </th>
                  </tr>
                </thead>
                <tbody class="p-0">
                  <!-- <div class="text-center font-size-lg" v-if="!allUser.length">No data found.</div> -->
                  <tr class="table-body-contents" v-if="!allPlayer.length">
                    <td class="text-center font-size-md font-weight-bold text-muted" colspan="10">
                      <b-spinner
                        class="justify-content-md-center text-blue"
                        v-if="!dataFound"
                      ></b-spinner>
                      <div class="justify-content-md-center text-blue" v-else-if="dataFound">
                        No data found
                      </div>
                    </td>
                  </tr>

                  <tr
                    class="table-body-contents"
                    v-for="(player, index) in allPlayer"
                    v-bind:key="player.key"
                    :class="player.bodyColor"
                  >
                    <td>{{ index + 1 + (currentPage - 1) * allPlayer.length }}</td>
                    <td>{{ player.fullName || "-" }}</td>
                    <td>{{ player.mobile || "-" }}</td>
                    <td>{{ player.email || "-" }}</td>
                    <td>{{ player.age || "-" }}</td>
                    <td>{{ player.keyRole || "-" }}</td>
                    <td>{{ player.battingType || "-" }}</td>
                    <td>{{ player.bowlingType || "-" }}</td>
                    <td v-if="player.isWicketkeeper">Yes</td>
                    <td v-if="!player.isWicketkeeper">No</td>
                    <td v-if="player.photograph">
                      <button
                        class="text-primary btn px-1 py-0"
                        v-b-modal.modal-1
                        @click="passData(player.photograph)"
                      >
                        View
                      </button>
                    </td>
                    <td v-if="!player.photograph">-</td>
                  </tr>
                  <viewImage
                    class="text-center"
                    v-bind:data="{
                      id: id
                    }"
                  ></viewImage>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment/moment";
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
import viewImage from "@/components/modal/viewImage.vue";

export default {
  name: "Table",
  components: {
    HeaderSection,
    Sidemenu,
    viewImage
  },
  data() {
    return {
      id: "",
      page: "",
      currentPage: 1,
      dataFound: false,
      allPlayer: [],
      PlayerArray: [],
      teamDetail: {},
      breadCrum: [
        {
          text: "Player"
        }
      ],
      teamTableHeaders: [
        {
          tableHeaderName: "Team Name",
          key: "key1"
        },
        {
          tableHeaderName: "Village",
          key: "key1"
        },
        {
          tableHeaderName: "Logo",
          key: "key1"
        }
      ],
      tableHeaders: [
        {
          tableHeaderName: "sr-no",
          key: "key1"
        },
        {
          tableHeaderName: "Name",
          key: "key1"
        },
        {
          tableHeaderName: "Contact No",
          key: "key1"
        },
        {
          tableHeaderName: "Email",
          key: "key1"
        },
        {
          tableHeaderName: "Age",
          key: "key1"
        },
        {
          tableHeaderName: "Role",
          key: "key1"
        },
        {
          tableHeaderName: "Batting Type",
          key: "key1"
        },
        {
          tableHeaderName: "Bowling Type",
          key: "key1"
        },
        {
          tableHeaderName: "Wicket Keeper",
          key: "key1"
        },
        {
          tableHeaderName: "Photo",
          key: "key1"
        }
      ],
      approvedClass: "text-success",
      rejectedClass: "text-danger",
      pendingClass: "text-primary"
    };
  },
  created() {
    this.getOne();
    this.viewPlayer(this.currentPage);
  },
  filters: {
    moment(date) {
      return moment(date).format("Do MMM YYYY");
    }
  },
  methods: {
    getOne() {
      if (this.$route.params.id) {
        service.getOneTeam(this.$route.params.id, data => {
          this.teamDetail = data.data;
        });
      }
    },
    passData(id) {
      this.id = id;
    },
    viewPlayer(page) {
      this.currentPage = page;
      const formData = {};
      formData.page = page;
      formData.team = this.$route.params.id;
      service.searchPlayer(formData, data => {
        if (data.status === 200) {
          this.allPlayer = data.data;
        }
        if (formData === "noDataFound") {
          this.dataFound = false;
        } else if (formData === "error") {
          this.dataFound = false;
        } else {
          this.dataFound = true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/scss/import";

input[type="text"]::placeholder {
  color: $bg-text-blue;
}
</style>
