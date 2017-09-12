<template>
	<div id="home-header">
		<span class="back" @click="back"><</span>
		<ul>
			<router-link to="/home/hot" tag="li" :class="routePath == '/home/hot'?className:''">正在热映</router-link>
			<router-link to="/home/come" tag="li" :class="routePath == '/home/come'?className:''">即将上映</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return{
				className: "active",
				routePath: ""
			}
		},
		beforeMount() {
			this.routePath = this.$route.path;
		},
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../style/mixin.less';

	#home-header{
		.wh(100%,1rem);
		.flex();
		.fixed;
		background-color: #1c2635;
		.sc(.32rem,#999);
		.back{
			position: absolute;
			.sc(.5rem,#fff);
			font-weight: 600;
			left: 5%;
		}
		ul{
			background-color: #0d121a;
			border: 1px solid #0d121a;
			.border-radius(.2rem);
			.flex();
			li{
				.padding(.1rem,.3rem);
				.border-radius(.2rem);
				cursor: pointer;
			}
			.active{
				color: #fff;
				background-color: #1c2635;
			}
		}
	}
</style> 	