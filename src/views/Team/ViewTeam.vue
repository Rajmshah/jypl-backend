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
          <div class="card rounded-0">
            <div class="p-0 rounded-0">
              <div class="card-header">
                <!-- search  -->

                <div class="search float-right mt-minus7">
                  <div class="row no-gutters align-items-center">
                    <div class="ml-5">
                      <input
                        class="form-control border-0 rounded-0 text-blue"
                        type="text"
                        v-model="searchText"
                        @input="viewteam(1)"
                        placeholder="Search"
                      />
                    </div>
                    <div class="ml-5">
                      <button
                        class="ml-auto text-dark btn btn-warning font-weight-bold"
                        v-on:click="generateExcel()"
                      >Excel</button>
                    </div>
                  </div>
                </div>
                <h5 class="card-title m-0">Teams</h5>
              </div>
              <table class="mb-0 table table-hover table-striped">
                <thead>
                  <tr class="table-body-header rounded-0">
                    <th
                      class="text-uppercase text-blue"
                      v-for="tableHeader in tableHeaders"
                      v-bind:key="tableHeader.tableHeaderName"
                    >{{ tableHeader.tableHeaderName }}</th>
                  </tr>
                </thead>
                <tbody class="p-0">
                  <!-- <div class="text-center font-size-lg" v-if="!allUser.length">No data found.</div> -->
                  <tr class="table-body-contents" v-if="!allteam.length">
                    <td class="text-center font-size-md font-weight-bold text-muted" colspan="7">
                      <b-spinner class="justify-content-md-center text-blue" v-if="!dataFound"></b-spinner>
                      <div
                        class="justify-content-md-center text-blue"
                        v-else-if="dataFound"
                      >No data found</div>
                    </td>
                  </tr>

                  <tr
                    class="table-body-contents"
                    v-for="(team, index) in allteam"
                    v-bind:key="team.key"
                    :class="team.bodyColor"
                  >
                    <td>{{ index + 1 + (currentPage - 1) * 10 }}</td>
                    <td>{{ team.name }}</td>
                    <td>{{ team.village }}</td>

                    <td class="pl-4">
                      <router-link
                        class="text-warning btn px-1 py-0"
                        v-b-tooltip.hover
                        title="View"
                        :to="{ name: 'View TeamDetail', params: { id: team._id } }"
                        append
                      >
                        <font-awesome-icon :icon="['far', 'eye']" />
                      </router-link>
                      <button class="text-danger btn px-1 py-0" v-b-modal="'delete' + team._id">
                        <font-awesome-icon :icon="['far', 'trash-alt']" />
                      </button>
                      <Delete
                        class="text-center"
                        :data="{ id: team._id }"
                        v-on:event_child="deleteAndRefresh"
                      ></Delete>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="my-2 py-1">
              <b-pagination
                class="mb-0"
                align="center"
                v-if="totalCount"
                :total-rows="totalCount"
                v-model="currentPage"
                :per-page="perPage"
                v-on:input="goToPage(currentPage)"
              />
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
import Delete from "@/components/modal/delete.vue";

export default {
  name: "Table",
  components: {
    HeaderSection,
    Sidemenu,
    Delete
  },
  data() {
    return {
      id: "",
      page: "",
      searchText: "",
      currentPage: 1,
      totalCount: 0,
      perPage: 0,
      dataFound: false,
      allteam: [],
      deleteId: {},
      teamArray: [],
      breadCrum: [
        {
          text: "team"
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
          tableHeaderName: "Village",
          key: "key1"
        },
        {
          tableHeaderName: "Action",
          key: "key1"
        }
      ],
      approvedClass: "text-success",
      rejectedClass: "text-danger",
      pendingClass: "text-primary"
    };
  },
  created() {
    this.viewteam(this.currentPage);
  },
  filters: {
    moment(date) {
      return moment(date).format("Do MMM YYYY");
    }
  },
  methods: {
    deleteAndRefresh(obj) {
      const formData = {};
      formData.page = 1;
      formData.team = obj._id;
      service.searchPlayer(formData, data => {
        if (data.status === 200) {
          this.$toaster.error(
            "Please delete players before deleting the team."
          );
          this.$bvModal.hide("delete" + obj._id);
        } else {
          service.deleteTeam(obj._id, data => {
            this.viewteam(this.currentPage);
          });
        }
      });
    },

    viewteam(page) {
      this.currentPage = page;
      const formData = {};
      formData.page = page;
      formData.name = this.searchText;
      service.searchTeam(formData, data => {
        if (data.status === 200) {
          this.allteam = data.data.result;
          this.totalCount = data.data.count;
          this.perPage = 10;
        } else if (page > 1) {
          this.goToPage(page - 1);
        }
        if (formData === "noDataFound") {
          this.dataFound = false;
        } else if (formData === "error") {
          this.dataFound = false;
        } else {
          this.dataFound = true;
        }
      });
    },
    generateExcel() {
      service.generateTeamExcel({}, "Team", (err, result) => {
        if (err) {
          this.$toaster.error("Error while generating Excel.", {
            timeout: 2000
          });
        } else {
          this.$toaster.success("Excel Generated Successfully.", {
            timeout: 2000
          });
        }
      });
    },
    deleteData(id) {
      this.id = id;
    },
    goToPage(page) {
      this.$router.push({
        name: "View Team"
      });
      this.viewteam(page);
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
