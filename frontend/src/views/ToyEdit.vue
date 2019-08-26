<template>
  <section class="ToyEdit">
    <h1>{{pageTitle}}</h1>
    <v-form>
      <v-container grid-list xl>
        <v-layout wrap>
          <v-flex xs12 md4>
            <v-text-field
              v-model="toy.name"
              :rules="formRules.name"
              :counter="10"
              label="Toy Name"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field
              type="number"
              v-model="toy.price"
              :rules="formRules.price"
              label="Toy Price"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-select :items="types" v-model="toy.type" label="Choose Type"></v-select>
          </v-flex>

          <v-flex xs6>
        <v-checkbox v-model="toy.inStock" class="mx-2" label="In Stock"></v-checkbox>
          </v-flex>
          <v-btn @click="updateToy">Save changes</v-btn>
        </v-layout>
      </v-container>
    </v-form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      toy: {
        name: "",
        price: null,
        type: "",
        inStock: false
      },

      formRules: {
        name: [
          v => !!v || "Name is required",
          v => v.length <= 10 || "Name most be less than 10 characters"
        ],
        price: [v => !!v || "Price is required"]
      },
      types: ["Adult", "Funny", "Educational"],

      toyId: "",
      pageTitle: ""
    };
  },
  created() {
    this.toyId = this.$route.params.id;
    if (this.toyId) {
      this.$store.dispatch({ type: "getToy", toyId: this.toyId }).then(() => {
        this.toy = this.$store.getters.getToy;
        this.pageTitle = `Edit ${this.toy.name}`;
      });
    } else {
      this.pageTitle = "Add Toy Product";
    }
  },
  methods: {
    updateToy() {
      this.$store.dispatch({ type: "updateToy", toy: this.toy }).then(() => {
        this.$swal.fire("Toy added!", "Thanks for that!", "success");

        this.$router.push("/toy");
      });
    }
  }
};
</script>
