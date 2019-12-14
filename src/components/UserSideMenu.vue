  <template>
  <!-- sidemneu -->
  <div class="right-sidemenu">
    <div class="list-group">
      <router-link
        class="list-group-item rounded-0 text-capitalize text-blue"
        v-for="navigation in navigations"
        v-bind:key="navigation.name"
        v-bind:to="{ name: navigation.routerName }"
      >{{navigation.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'usersidemenu',
  created() {},
  methods: {},
  data() {
    return {
      navigations: [
        {
          name: 'Basic Detail',
          routerName: 'Basic Detail',
          link: '/basic-detail',
        },
        {
          name: 'User Balance Flow',
          routerName: 'Balance Flow',
          link: '/balance-flow',
        },
        {
          name: 'User Withdrawal',
          routerName: 'User Withdrawal',
          link: '/user-withdrawal',
        },
        {
          name: 'User Deposits',
          routerName: 'User Deposits',
          link: '/user-deposits',
        },
        {
          name: 'User Orders',
          routerName: 'User Orders',
          link: '/user-orders',
        },
        {
          name: 'User Transactions',
          routerName: 'User Transactions',
          link: '/user-transactions',
        },
        {
          name: 'User Login Logs',
          routerName: 'Login Logs',
          link: '/login-logs',
        },
        {
          name: 'Password Change Logs',
          routerName: 'Password Change Logs',
          link: '/password-change-logs',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "~@/scss/import";
</style>
