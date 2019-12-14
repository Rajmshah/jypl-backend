<template>
  <div>
    <div class>
      <div class="main-content bg-light">
        <div class="container-fluid basic-table my-3">
          <b-card-group deck>
            <b-card
              no-body
              header="Basic Table"
              header-tag="header"
              class="rounded-0 text-uppercase"
            >
              <b-card-text class="p-0 rounded-0">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr class="table-body-header rounded-0">
                      <th
                        class="text-uppercase"
                        v-for="tableHeader in tableHeaders"
                        v-bind:key="tableHeader.tableHeaderName"
                      >{{tableHeader.tableHeaderName}}</th>
                    </tr>
                  </thead>
                  <tbody class="p-0">
                    <tr
                      class="table-body-contents"
                      v-for=" tableBodyContent in tableBodyContentOne"
                      v-bind:key="tableBodyContent.key"
                      :class="tableBodyContent.bodyColor"
                    >
                      <td v-html="tableBodyContent.bodyFirstName"></td>
                      <td class v-html="tableBodyContent.bodyLastName"></td>
                      <td class v-html="tableBodyContent.bodyAge"></td>
                      <td v-html="tableBodyContent.bodyEmail"></td>
                      <td>
                        <span class="badge badge-success">{{tableBodyContent.bodyStatus}}</span>
                      </td>
                      <!-- <td>
                        <span class="text-info btn px-1">
                          <font-awesome-icon :icon="['fas', 'edit']"/>
                        </span>
                        <span class="text-primary btn px-1">
                          <font-awesome-icon :icon="['far', 'edit']"/>
                        </span>
                        <span class="text-danger btn px-1 py-1">
                          <font-awesome-icon :icon="['far', 'trash-alt']"/>
                        </span>
                      </td>-->
                    </tr>
                  </tbody>
                </table>
                <div class="mt-4">
                  <b-pagination-nav
                    align="center"
                    :number-of-pages="10"
                    base-url="#"
                    v-model="currentPage"
                  />
                </div>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  components: {},
  data() {
    return {
      tableHeaders: [
        {
          tableHeaderName: 'Firstname',
          key: 'key1',
        },
        {
          tableHeaderName: 'lastname',
          key: 'key1',
        },
        {
          tableHeaderName: 'age',
          key: 'key1',
        },
        { tableHeaderName: 'email', key: 'key1' },
        { tableHeaderName: 'Status', key: 'key1' },
        // { tableHeaderName: "Action", key: "key1" }
      ],
      tableBodyContentOne: [
        {
          bodyFirstName: 'Dickerson',
          bodyLastName: 'Macdonald',
          bodyAge: '40',
          bodyEmail: 'Dickerson@gmail.com',
          bodyColor: 'body-gray-lightest',
          bodyStatus: 'Active',
        },
        {
          bodyFirstName: 'Larsen',
          bodyLastName: 'Shaw',
          bodyAge: '21',
          bodyEmail: 'Larsen@gmail.com',
          bodyColor: 'body-white',
          bodyStatus: 'Active',
        },
        {
          bodyFirstName: 'Geneva',
          bodyLastName: 'Wilson',
          bodyAge: '59',
          bodyEmail: 'Geneva@gmail.com',
          bodyColor: 'body-gray-lightest',
          bodyStatus: 'Active',
        },
        {
          bodyFirstName: 'Jami',
          bodyLastName: 'Carney',
          bodyAge: '38',
          bodyEmail: 'Jami@gmail.com',
          bodyColor: 'body-white',
          bodyStatus: 'Active',
        },
      ],
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ['first_name', 'last_name', 'age', 'email'],
      items: [
        {
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald',
          email: 'Dickerson@gmail.com',
        },
        {
          age: 21,
          first_name: 'Larsen',
          last_name: 'Shaw',
          email: 'Larsen@gmail.com',
        },
        {
          age: 59,
          first_name: 'Geneva',
          last_name: 'Wilson',
          email: 'Geneva@gmail.com',
        },
        {
          age: 38,
          first_name: 'Jami',
          last_name: 'Carney',
          email: 'Jami@gmail.com',
        },
      ],
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.openerText = 'Close';
      this.isOpen = true;
    },
    close() {
      this.openerText = 'Open';
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/scss/import";
</style>
