<template>
	<header class="AppHeader">
				<v-toolbar app dark height="75" class="indigo lighten-1">
					<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
					<v-toolbar-title class="display-1">
						<span class="font-weight-light">Mister</span>
						<span>Toy</span>
					</v-toolbar-title>
		</v-toolbar>
		<AppNav :drawer= "drawer"></AppNav>


	</header>
</template>

<script>
	import AppNav from "./AppNav.vue";
	export default {
		components: {
			AppNav
		},
		data() {
			return {
				drawer: false
			}
		}
	};
</script>


