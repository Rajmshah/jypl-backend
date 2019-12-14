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
        <!-- breadcrum -->
        <!-- <b-breadcrumb :items="breadCrum" class="bg-light border rounded-0"/> -->
        <div class="container-fluid basic-table my-3">
          <div class="card rounded-0">
            <div class="p-0 rounded-0">
              <div class="card-header">
                <div class="search search-width float-right mt-minus7">
                  <div class="row no-gutters align-items-center">
                    <div class="col">
                      <input
                        class="form-control border-0 rounded-0 text-blue"
                        type="text"
                        v-model="searchText"
                        @input="viewSubscription(1)"
                        placeholder="Search"
                      />
                    </div>
                    <!-- <div class="ml-3">
                      <router-link
                        class="ml-auto text-dark font-weight-bold btn btn-warning"
                        to="/create-subscription"
                      >Create Subscription</router-link>
                    </div>-->
                    <!-- <div class="ml-3">
                      <button
                        v-on:click="generateExcel()"
                        class="ml-auto text-dark btn btn-warning font-weight-bold"
                      >Excel</button>
                    </div>-->
                  </div>
                </div>
                <h5 class="card-title m-0">Subscription</h5>
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
                  <tr class="table-body-contents" v-if="!allSubscription.length">
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
                    v-for="(Subscription, index) in allSubscription"
                    v-bind:key="Subscription.key"
                    :class="Subscription.bodyColor"
                  >
                    <td>{{ index + 1 + (currentPage - 1) * 10 }}</td>
                    <td>{{ Subscription.email || "-" }}</td>
                    <td class="pl-4">
                      <!-- <router-link
                        class="text-warning btn px-1 py-0"
                        v-b-tooltip.hover
                        title="Edit"
                        :to="{ name: 'EditSubscription', params: { id: Subscription._id } }"
                        append
                      >
                        <font-awesome-icon :icon="['fas', 'edit']" />
                      </router-link>-->

                      <button
                        class="text-danger btn px-1 py-0"
                        v-b-modal="'delete' + Subscription._id"
                      >
                        <font-awesome-icon :icon="['far', 'trash-alt']" />
                      </button>
                      <Delete
                        class="text-center"
                        :data="{ id: Subscription._id }"
                        v-on:event_child="deleteAndRefresh"
                      ></Delete>

                      <!-- <div class="modal"></div> -->
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
import HeaderSection from "@/components/header-section.vue";
import Sidemenu from "@/components/sidemenu-section.vue";
import service from "@/service/apiService";
import Delete from "@/components/modal/delete.vue";
import { constants } from "crypto";

export default {
  name: "Table",
  components: {
    HeaderSection,
    Sidemenu,
    Delete
  },
  data() {
    return {
      type: "Subscription",
      id: "",
      page: "",
      searchText: "",
      currentPage: 1,
      totalCount: 0,
      perPage: 0,
      dataFound: false,
      allSubscription: [],
      SubscriptionArray: [],
      breadCrum: [
        {
          text: "Subscription"
        }
      ],
      tableHeaders: [
        {
          tableHeaderName: "sr-no",
          key: "key1"
        },
        {
          tableHeaderName: "Subscription Email",
          key: "key2"
        },
        {
          tableHeaderName: "Action",
          key: "key3"
        }
      ],
      approvedClass: "text-success",
      rejectedClass: "text-danger",
      pendingClass: "text-primary"
    };
  },
  created() {
    this.viewSubscription(this.currentPage);
  },

  methods: {
    deleteAndRefresh(obj) {
      service.deleteSubscription(obj._id, data => {
        this.viewSubscription(this.currentPage);
      });
    },
    viewSubscription(page) {
      this.currentPage = page;
      const formData = {};
      formData.page = page;
      formData.name = this.searchText;
      service.searchSubscription(formData, data => {
        if (data.status === 200) {
          this.allSubscription = data.data.result;
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

    deleteData(id) {
      this.id = id;
    },
    goToPage(page) {
      this.$router.push({
        name: "ViewSubscription"
      });
      this.viewSubscription(page);
    },
    generateExcel() {
      service.generateSubscriptionExcel({}, "Subscription", (err, result) => {
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
