<template>
	<div id="app">
		<div id="nav">
			<router-link v-for="(item, index) in navigations" :key="index" :to="item.path">{{item.label}}</router-link>
		</div>
		<router-view />
	</div>
</template>
<script>
import rootNav from "./assets/constants/rootNav";
export default {
	name: "DevTools",
	data() {
		return {
			navigations: rootNav
		};
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100vh;
}

#nav {
	height: 64px;
	background: #4527a0;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
	display: flex;
	flex-direction: row;
	align-items: center;
}

#nav a {
	font-weight: bold;
	color: #fff;
	margin-left: 20px;
	font-size: 26px;
	z-index: 10;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
