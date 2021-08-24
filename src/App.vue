<template>
	<main>
		<header-component v-if="!$route.meta.hideLayoutComponents"></header-component>
		<transition name="route" mode="out-in">
			<router-view ></router-view>
		</transition>
		<alert-component></alert-component>
	</main>
</template>

<script>
import header from "./layout/header.vue";
import alert from "./components/shared/alert/alert.vue"

export default {
  name: 'app',
  components: {
		"header-component": header,
		"alert-component": alert
  },
};
</script>

<style lang="scss">
    @import '@/styles/main.scss';

	//CSS to get work floating buttons with animations
	/*main {
		position: fixed;
		width: 100%;
		height: 100%;
		overflow-x: hidden
	}*/
</style>
