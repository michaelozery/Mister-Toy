<template>
  <div class="ToyPreview">
      <v-card color="lightgrey">
        <img src="../assets/toyImg.jpeg" alt="ToyImg" />
      <v-card-title>
      <span>Name:</span> {{toy.name}}
      </v-card-title>
      <v-card-text>
      <span>Price:</span> {{toy.price}}
      </v-card-text>
      <v-card-text>
      <span>Type:</span> {{toy.type}}
      </v-card-text>
      <v-card-text>
      Date: {{toy.createdAt}}
      </v-card-text>
      <v-card-text>
      In stock? {{toy.inStock}}
      </v-card-text>
    <!-- <button>Edit: {{url}}</button>|| -->
    <v-card-actions>
    <v-btn flat color="blue">
      <router-link class="detailsBtn" :to="detailsUrl">Details</router-link>
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
    </v-card-actions>
    <hr />
          </v-card>
  </div>
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

.detailsBtn {
  color: #2196F3
}
</style>
