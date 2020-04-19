<template>
	<div class="Page">
		<div class="Page-title" id="Page-title">{{pageTitle}}</div>
		<div class="Page-subTopic-wrapper">
			<div class="Page-subTopic" v-for="(item, index) in componentData.list" :key="index">
				<TitleBox :data="item.title"></TitleBox>
				<DescriptionBox :data="item.description"></DescriptionBox>
			</div>
		</div>
	</div>
</template>
<script>
import { data } from "../assets/constants/content";
import TitleBox from "@/components/titleBox";
import DescriptionBox from "@/components/descriptionBox";
import editing from "./mixins/editing";
import debugging from "./mixins/debugging";
export default {
	name: "Page",
	mixins: [editing, debugging],
	components: { TitleBox, DescriptionBox },
	data() {
		return {
			data: data,
			componentData: null,
			pageTitle: null
		};
	},
	created() {
		this.componentData = this.data[this.$route.params.page];
		this.pageTitle = this.componentData.pageTitle;
	}
};
</script>
<style >
.Page {
	background: #00bcd457;
	padding: 50px 80px;
}
.Page-title {
	color: Green;
	font-size: 48px;
	font-weight: bolder;
	margin-bottom: 15px;
}
#Page-title {
	color: #e91e63b5;
}

.Page-subTopic {
	border: 1px dashed #000;
	padding: 20px 30px;
	border-bottom: none;
}
.Page-subTopic:last-child {
	border-bottom: 1px dashed #000;
}
.Red-border {
	border: 2px dotted red;
	display: inline-block;
	padding: 10px;
}

.Blue-border {
	border: 2px dotted blue;
	display: inline-block;
	padding: 10px;
}
</style>