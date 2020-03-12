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
                        @input="viewCouple(1)"
                        placeholder="Search"
                      />
                    </div>
                    <!-- <div class="ml-3">
                      <router-link
                        class="ml-auto text-dark font-weight-bold btn btn-warning"
                        to="/create-couple"
                        >Create Couple</router-link
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
                <h5 class="card-title m-0">Couple</h5>
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
                  <tr class="table-body-contents" v-if="!allCouple.length">
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
                    v-for="(Couple, index) in allCouple"
                    v-bind:key="Couple.key"
                    :class="Couple.bodyColor"
                  >
                    <td>{{ index + 1 + (currentPage - 1) * 10 }}</td>
                    <td>{{ Couple.coupleId || "-" }}</td>
                    <td>{{ Couple.fullName || "-" }}</td>
                    <td>{{ Couple.company.name || "-" }}</td>
                    <td>{{ Couple.paymentStatus || "-" }}</td>
                    <td class="">
                      <button
                        class="text-dark btn pr-1 pl-0 py-0"
                        v-if="Couple.paymentStatus === 'Paid'"
                        @click="generateWelcomeCoupleMail(Couple)"
                      >
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                      </button>
                      <!-- <button
                        class="text-dark btn pr-1 pl-1 py-0"
                        v-if="Couple.paymentStatus === 'Paid'"
                        @click="generateInvoiceCoupleMail(Couple)"
                      >
                        <font-awesome-icon :icon="['fas', 'download']" />
                      </button> -->
                      <router-link
                        class="text-warning btn pr-1 pl-1 py-0"
                        v-b-tooltip.hover
                        title="Edit"
                        :to="{ name: 'EditCouple', params: { id: Couple._id } }"
                        append
                      >
                        <font-awesome-icon :icon="['fas', 'edit']" />
                      </router-link>

                      <button class="text-danger btn  pl-1 py-0" v-b-modal="'delete' + Couple._id">
                        <font-awesome-icon :icon="['far', 'trash-alt']" />
                      </button>
                      <Delete
                        class="text-center"
                        :data="{ id: Couple._id }"
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
  name: 'ViewCouple',
  components: {
    HeaderSection,
    Sidemenu,
    Delete,
  },
  data() {
    return {
      type: 'Couple',
      id: '',
      page: '',
      searchText: '',
      currentPage: 1,
      totalCount: 0,
      perPage: 0,
      dataFound: false,
      allCouple: [],
      CoupleArray: [],
      breadCrum: [
        {
          text: 'Couple',
        },
      ],
      tableHeaders: [
        {
          tableHeaderName: 'sr-no',
          key: 'key1',
        },
        {
          tableHeaderName: 'Couple Id',
          key: 'key1',
        },
        {
          tableHeaderName: 'Name',
          key: 'key1',
        },
        {
          tableHeaderName: 'Company Name',
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
    this.viewCouple(this.currentPage);
  },

  methods: {
    deleteAndRefresh(obj) {
      service.deleteCouple(obj._id, () => {
        // if (this.allCouple.length == 1) {
        //   this.allCouple = [];
        //   this.$router.go(0);
        // } else {
        this.viewCouple(this.currentPage);
        // }
      });
    },
    viewCouple(page) {
      this.currentPage = page;
      const formData = {};
      formData.page = page;
      formData.name = this.searchText;
      service.searchCouple(formData, (data) => {
        if (data.status === 200) {
          this.allCouple = data.data.result;
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
        name: 'ViewCouple',
      });
      this.viewCouple(page);
    },
    generateExcel() {
      service.generateCoupleExcel({}, 'Couple', (err, result) => {
        if (err) {
          this.$toaster.error('Error while generating Excel.', {
            timeout: 2000,
          });
        } else if (result) {
          this.$toaster.success('Excel Generated Successfully.', {
            timeout: 2000,
          });
        }
      });
    },
    generateWelcomeCoupleMail(coupleDetail) {
      service.generateWelcomeCoupleMail(coupleDetail, () => {
        // console.log(data);
        this.$toaster.success('Mailed on your email Id.');
      });
    },
    generateInvoiceCoupleMail(coupleDetail) {
      service.generateInvoiceCoupleMail(coupleDetail, () => {
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
