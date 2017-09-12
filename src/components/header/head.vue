<template>
	<div id="header">
		<span class="back" @click="back"><</span>
		<h3>{{title}}</h3>
	</div>
</template>
<script>
	export default {
		data() {
			return{
			}
		},
		props:["title"],
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../style/mixin.less';

	#header{
		.wh(100%,1rem);
		.flex();
		.fixed;
		background-color: #1c2635;
		.sc(.32rem,#fff);
		h3{
			color: #fff;
		}
		.back{
			position: absolute;
			.sc(.5rem,#fff);
			font-weight: 600;
			left: 5%;
		}
	}
</style> 	