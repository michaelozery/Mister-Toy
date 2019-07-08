<template>
  <li class="ToyPreview">
    <ul>
      <li>
        <img src="../assets/toyImg.jpeg" alt="ToyImg" />
      </li>
      <li>Name: {{toy.name}}</li>
      <li>Price: {{toy.price}}</li>
      <li>Type: {{toy.type}}</li>
      <li>Date: {{toy.createdAt}}</li>
      <li>In stock? {{toy.inStock}}</li>
    </ul>
    <!-- <button>Edit: {{url}}</button>|| -->
    <v-btn flat color="blue">
      <router-link :to="detailsUrl">Details</router-link>
      <v-icon>details</v-icon>
    </v-btn>
    <v-btn flat color="green">
      <router-link class="editBtn" :to="editUrl">Edit</router-link>
      <v-icon>edit</v-icon>
    </v-btn>
    <v-btn flat color="red" @click="emitDelete">
      <span>Delete</span>
     <v-icon>delete</v-icon>
    </v-btn>
    <hr />
  </li>
</template>

<script>
export default {
  props: {
    toy: Object
  },
  methods: {
    emitDelete() {
      this.$emit("emitDelete", this.toy);
    }
  },
  data() {
    return {
      detailsUrl: "",
      editurl: ""
    };
  },
  created() {
    this.detailsUrl = "/toy/" + this.toy._id;
    this.editUrl = "/edit/" + this.toy._id;
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.editBtn {
  color: green;
}
</style>
