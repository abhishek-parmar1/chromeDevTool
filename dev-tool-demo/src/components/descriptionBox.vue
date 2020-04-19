<template>
	<div class="DescriptionBox">
		<ul>
			<li
				v-for="(item, index) in data"
				:key="index"
				v-html="item.label"
				:class="{
				'trick':item.isTrick
			}"
			></li>
		</ul>
	</div>
</template>
<script>
export default {
	name: "DescriptionBox",
	props: {
		data: {
			type: Array,
			required: true
		}
	}
};
</script>
<style >
.DescriptionBox {
	margin-top: 8px;
	margin-bottom: 0;
	padding: 10px 20px;
	background-color: #fff;
	border: 2px solid #00800099;
	font-size: 18px;
}
.trick {
	color: red;
}
</style>