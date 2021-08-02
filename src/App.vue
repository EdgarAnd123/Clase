<template>
	<main>
		<header-component v-if="!$route.meta.hideLayoutComponents"></header-component>
		<router-view ></router-view>
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
