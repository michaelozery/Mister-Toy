<template>
<v-app>
	<section class="ToyApp">
		<AppHeader />
		  <v-content>
    <v-container>
		<router-view/>
		</v-container>
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
