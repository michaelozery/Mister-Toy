<template>
<v-app class="grey lighten-4">
	<section class="ToyApp">
		<AppHeader />
		<v-content>
		<router-view></router-view>
		</v-content>
	</section>
	</v-app> 
</template>

 <script>
	import AppHeader from "../components/AppHeader.vue";

	export default {
		components: {
			AppHeader
		},
		created() {
			this.$store.dispatch({ type: "loadToys" });
		}
	};
</script>
