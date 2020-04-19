<template>
	<div class="home">
		<welcome></welcome>
	</div>
</template>
<script>
import welcome from "@/components/welcome.vue";

export default {
	name: "Home",
	components: {
		welcome
	}
};
</script>
<style scoped>
.home {
	height: 100%;
}
</style>