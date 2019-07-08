<template>
  <section class="ToyDetails">
    <h2>Details here</h2>
	<ul>
    <li><span>Name:</span> {{toy.name}}</li>
	<li><span>Price</span> {{toy.price}}</li>
	<li><span>Type:</span> {{toy.type}}</li>
	<li><span>Uploaded At:</span> {{toy.createdAt}}</li>
	<li>{{inStock}}</li>
	</ul>

  </section>
</template>

<script>
export default {
//   data() {
//     return {
//       toy: {}
//     };
//   },
	computed: {
		toy() {
			return this.$store.getters.getToy
		},
		inStock() {
			const inStock = this.toy.inStock
			if(inStock) return 'In Stock'
			else return 'Out Of Stock'
		}
	},
  created() {
    const toyId = this.$route.params.id;
	this.$store.dispatch({ type: "getToy", toyId }) 
	}
};
</script>