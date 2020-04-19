<template>
	<div class="Topics lg-l-row lg-la-c-c">
		<ul class="Topics-list">
			<li
				class="Topics-list-item"
				v-for="(item, index) in navigations"
				:key="index"
				@click.self="redirectToTopic(item.path)"
			>
				<router-link class="Topics-list-item-a" :to="item.path">{{item.label}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import topics from "../assets/constants/topics";
export default {
	name: "Topics",
	data() {
		return {
			navigations: topics
		};
	},
	methods: {
		redirectToTopic(path) {
			this.$router.push({ path });
		}
	}
};
</script>

<style >
.Topics {
	margin-top: 150px;
}
.Topics-list {
	width: 50%;
}
.Topics-list-item {
	border: 4px solid #00bcd4;
	border-bottom: none;
	height: 25px;
	list-style: none;
	padding: 15px 0;
	font-size: 25px;
	font-weight: bolder;
}
.Topics-list-item:last-child {
	border-bottom: 4px solid #00bcd4;
}
.Topics-list-item:hover {
	cursor: pointer;
	box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.16),
		0 15px 12px 0 rgba(0, 0, 0, 0.12);
}
.Topics-list-item-a {
	margin-left: 40%;
	text-decoration: none;
	color: #03a9f4;
}
</style>