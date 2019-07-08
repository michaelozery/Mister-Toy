<template>
  <form class="ToyFilter" @input="emitFilter">
    <h3>Filter:</h3>
    <span>Name:</span>
    <input type="text" v-model="filterBy.name" placeholder="By Name" />
    <select v-model="filterBy.inStock">
      <option selected value>Stock</option>
      <option value="true">In Stock</option>
      <option value="false">Out Of Stock</option>
    </select>

    <select v-model="filterBy.type">
      <option value>Type</option>
      <option value="Adult" selected>Adult</option>
      <option value="Funny">Funny</option>
      <option value="Educational">Educational</option>
    </select>
    <span>Price Range:</span>
    <input type="number" v-model="filterBy.minPrice" placeholder="From" />
    <span>-</span>
    <input type="number" v-model="filterBy.maxPrice" placeholder="To" />
  </form>
</template>

<script>
export default {
  props: {
    toys: Array
  },
  data() {
    return {
      filterBy: {
        name: "",
        inStock: "",
        type: "",
        minPrice: "",
        maxPrice: ""
      }
    };
  },
  methods: {
    emitFilter() {
      this.$emit("setFilter", this.filterBy);
    }
  }
};
</script>