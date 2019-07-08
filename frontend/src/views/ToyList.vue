<template>
	<section class="ToyList" >
		<ToyFilter :toys="toys" @setFilter="setFilter"></ToyFilter>
		 <v-btn><router-link to="/edit">Add Toy</router-link></v-btn>
			<ToyPreview  v-for="toy in toys" :key="toy._id" :toy="toy" @emitDelete="deleteToy" />
	</section>
</template>

<script>
	import ToyPreview from "../components/ToyPreview.vue";
	import ToyFilter from '../components/ToyFilter.vue';
	export default {
		components: {
			ToyPreview,
			ToyFilter
		},
		computed: {
			toys() {
				return this.$store.getters.toysForDisplay;
			},
			// filteredToys() {
			// 	return this.$store.getters.getFilteredToys;
			// }
			
		},
		methods: {
			deleteToy(toy) {
				this.$store.dispatch({ type: "deleteToy", toy }).then(toy => alert('toy deleteddd '))
				.catch(err => err)
			},
			setFilter(filterBy){
				this.$store.dispatch({type: 'setFilter', filterBy})
			}
		},
	};
</script>
