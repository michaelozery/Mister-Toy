<template>
  <header class="AppHeader mb-3">
    <v-toolbar app dark height="75" class="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="display-1">
        <span class="font-weight-light">Mister</span>
        <span>Toy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/login">
        <v-btn color="secondary font-weight-light">Login</v-btn>
      </router-link>
      <router-link to="/signup">
        <v-btn color="secondary font-weight-light">Sign Up</v-btn>
      </router-link>
    </v-toolbar>
    <AppNav :drawer="drawer"></AppNav>
  </header>
</template>

<script>
import AppNav from "./AppNav.vue";
export default {
  components: {
    AppNav
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>


