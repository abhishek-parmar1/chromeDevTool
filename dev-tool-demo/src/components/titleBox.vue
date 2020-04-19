<template>
	<div class="TitleBox" v-html="data"></div>
</template>
<script>
export default {
	name: "TitleBox",
	props: {
		data: {
			type: String,
			required: true
		}
	}
};
</script>
<style >
.TitleBox {
	padding: 5px 20px;
	background-color: #fff;
	border: 4px dotted #ffa500a3;
	font-size: 26px;
	font-weight: 800;
}
</style>