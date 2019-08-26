<template>
  <section class="signup-page">
    <h2 class="display-2 d-flex justify-center mb-4">Sign Up</h2>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="user.name"
        :counter="16"
        :rules="nameRules"
        label="Name"
        autocomplete="username"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.username"
        :counter="16"
        :rules="nameRules"
        label="User Name"
        autocomplete="username"
        required
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="user.password"
        :rules="passwordRules"
        label="Password"
        autocomplete="current-password"
        required
      ></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="handleSignup">Sign Up</v-btn>
    </v-form>
  </section>
</template>

<script>
import userService from "../services/userService";
export default {
  data() {
    return {
      valid: true,
      user: {
        username: "",
        name: "",
        password: ""
      },
      usernameRules: [
        v => !!v || "Username is required",
        v => (v && v.length <= 16) || "Username must be less than 16 characters"
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 16) || "Name must be less than 16 characters"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length > 8 || "Password most be more than 8 characters"
      ]
    };
  },

  methods: {
    handleSignup() {
      console.log("sign up", this.user);
      userService.signup(this.user);
    }
  }
};
</script>