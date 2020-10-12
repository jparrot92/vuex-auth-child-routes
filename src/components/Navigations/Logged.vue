<template>
    <b-nav tabs>
        <b-nav-item exact exact-active-class="active" to="/secret">Página secreta</b-nav-item>
        <b-nav-item exact exact-active-class="active" to="/secret/notes">Notas secretas</b-nav-item>
        <b-nav-item @click="signOff">Cerrar sesión</b-nav-item>
    </b-nav>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations('auth', ['logout']),
    signOff() {
      this.logout();
      this.$router.push('/login');
    },
  },
};
</script>
