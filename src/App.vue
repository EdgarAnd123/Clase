<template>
	<main>
		<header-component v-if="!$route.meta.hideLayoutComponents"></header-component>
		<transition name="route" mode="out-in">
			<router-view ></router-view>
		</transition>
		<alert-component></alert-component>
		<footer-component v-if="!$route.meta.hideLayoutComponents"></footer-component>
	</main>
</template>

<script>
import header from "./layout/header.vue";
import footer from "./layout/footer.vue";
import alert from "./components/shared/alert/alert.vue"

export default {
  name: 'app',
  components: {
		"header-component": header,
		"footer-component": footer,
		"alert-component": alert
  },
};
</script>

<style lang="scss">
    @import '@/styles/main.scss';
</style>
