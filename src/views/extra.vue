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
                        @input="viewPlayer(1)"
                        placeholder="Search"
                      />
                    </div>
                    <!-- <div class="ml-3">
                      <router-link
                        class="ml-auto text-dark font-weight-bold btn btn-warning"
                        to="/create-player"
                        >Create Player</router-link
                      >
                    </div> -->
                    <div class="ml-3">
                      <button
                        v-on:click="generateExcel()"
                        class="ml-auto text-dark btn btn-warning font-weight-bold"
                      >
                        Excel
                      </button>
                    </div>
                  </div>
                </div>
                <h5 class="card-title m-0">Player</h5>
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
                  <tr class="table-body-contents" v-if="!allPlayer.length">
                    <td class="text-center font-size-md font-weight-bold text-muted" colspan="7">
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
                    v-for="(Player, index) in allPlayer"
                    v-bind:key="Player.key"
                    :class="Player.bodyColor"
                  >
                    <td>{{ index + 1 + (currentPage - 1) * 10 }}</td>
                    <td>{{ Player.playerId || "-" }}</td>
                    <td>{{ Player.fullName || "-" }}</td>
                    <td>{{ Player.team || "-" }}</td>
                    <td>{{ Player.paymentStatus || "-" }}</td>
                    <td class="">
                      <button
                        class="text-dark btn pr-1 pl-0 py-0"
                        v-if="Player.paymentStatus === 'Paid'"
                        @click="generateWelcomeMail(Player)"
                      >
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                      </button>
                      <button
                        class="text-dark btn pr-1 pl-1 py-0"
                        v-if="Player.paymentStatus === 'Paid'"
                        @click="generateInvoicePdf(Player)"
                      >
                        <font-awesome-icon :icon="['fas', 'download']" />
                      </button>
                      <router-link
                        class="text-warning btn pr-1 pl-1 py-0"
                        v-b-tooltip.hover
                        title="Edit"
                        :to="{ name: 'EditPlayer', params: { id: Player._id } }"
                        append
                      >
                        <font-awesome-icon :icon="['fas', 'edit']" />
                      </router-link>

                      <button class="text-danger btn  pl-1 py-0" v-b-modal="'delete' + Player._id">
                        <font-awesome-icon :icon="['far', 'trash-alt']" />
                      </button>
                      <Delete
                        class="text-center"
                        :data="{ id: Player._id }"
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
import HeaderSection from '@/components/header-section.vue';
import Sidemenu from '@/components/sidemenu-section.vue';
import service from '@/service/apiService';
import Delete from '@/components/modal/delete.vue';

export default {
  name: 'ViewPlayer',
  components: {
    HeaderSection,
    Sidemenu,
    Delete,
  },
  data() {
    return {
      type: 'Player',
      id: '',
      page: '',
      searchText: '',
      currentPage: 1,
      totalCount: 0,
      perPage: 0,
      dataFound: false,
      allPlayer: [],
      PlayerArray: [],
      breadCrum: [
        {
          text: 'Player',
        },
      ],
      tableHeaders: [
        {
          tableHeaderName: 'sr-no',
          key: 'key1',
        },
        {
          tableHeaderName: 'Player Id',
          key: 'key1',
        },
        {
          tableHeaderName: 'Name',
          key: 'key1',
        },
        {
          tableHeaderName: 'Team',
          key: 'key1',
        },
        {
          tableHeaderName: 'Payment Status',
          key: 'key1',
        },
        {
          tableHeaderName: 'Action',
          key: 'key1',
        },
      ],
      approvedClass: 'text-success',
      rejectedClass: 'text-danger',
      pendingClass: 'text-primary',
    };
  },
  created() {
    this.viewPlayer(this.currentPage);
  },

  methods: {
    deleteAndRefresh(obj) {
      service.deletePlayer(obj._id, (data) => {
        // if (this.allPlayer.length == 1) {
        //   this.allPlayer = [];
        //   this.$router.go(0);
        // } else {
        this.viewPlayer(this.currentPage);
        // }
      });
    },
    viewPlayer(page) {
      this.currentPage = page;
      const formData = {};
      formData.page = page;
      formData.name = this.searchText;
      service.searchPlayer(formData, (data) => {
        if (data.status === 200) {
          this.allPlayer = data.data.result;
          this.totalCount = data.data.count;
          this.perPage = 10;
        } else if (page > 1) {
          this.goToPage(page - 1);
        }
        if (formData === 'noDataFound') {
          this.dataFound = false;
        } else if (formData === 'error') {
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
        name: 'ViewPlayer',
      });
      this.viewPlayer(page);
    },
    generateExcel() {
      service.generatePlayerExcel({}, 'Player', (err, result) => {
        if (err) {
          this.$toaster.error('Error while generating Excel.', {
            timeout: 2000,
          });
        } else {
          this.$toaster.success('Excel Generated Successfully.', {
            timeout: 2000,
          });
        }
      });
    },
    generateWelcomeMail(playerDetail) {
      service.generateWelcomeMail(playerDetail, (data) => {
        // console.log(data);
        this.$toaster.success('Mailed on your email Id.');
      });
    },
    generateInvoicePdf(playerDetail) {
      service.generateInvoicePdf(playerDetail, (data) => {
        // console.log(data);
        // if (data.data) {
        //   location.href = "https://www.antennahouse.com/XSLsample/pdf/sample-link_1.pdf";
        // }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/scss/import";

input[type="text"]::placeholder {
  color: $bg-text-blue;
}
</style>
