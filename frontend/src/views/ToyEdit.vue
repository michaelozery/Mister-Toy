<template>
  <section class="ToyEdit">
    <h1>{{pageTitle}}</h1>
    <form @submit.prevent="updateToy">
      <span>Name:</span>
      <input type="text" v-model="toy.name" />
      <span>Price:</span>
      <input type="number" v-model="toy.price" />
    <span>Type:</span>
      <select v-model="toy.type">
        <option value="Adult" selected>Adult</option>
        <option value="Funny">Funny</option>
        <option value="Educational">Educational</option>
      </select>

      <span>In Stock?</span>
      <input type="checkbox" v-model="toy.inStock" />
      <button>Save changes</button>
    </form>
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
      this.$store.dispatch({ type: "updateToy", toy: this.toy })
      .then(()=> {alert('heyy')
      this.$router.push("/toy")});
    }
  }
};
</script>
