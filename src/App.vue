<template>
  <div id="app">
    <loading :active.sync="loading"></loading>
    <b-container>
      <navigation-guest v-if="!isLogged"></navigation-guest>
      <navigation-logged v-else></navigation-logged>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import NavigationLogged from '@/components/Navigations/Logged.vue';
import NavigationGuest from '@/components/Navigations/Guest.vue';
import { mapState } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  components: {
    NavigationLogged, NavigationGuest, Loading,
  },
  computed: {
    ...mapState('auth', ['isLogged']),
    ...mapState(['loading']),
  },
};
</script>
