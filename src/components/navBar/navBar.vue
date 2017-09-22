<template>
	<div id="nav">
		<div class="logo">
			<router-link to="/index">
				<img src="../../images/logo_mtime.png" alt="">
			</router-link>
		</div>
		<ul class="tab">
			<router-link to="/index" tag="li" class="active">首页</router-link>
			<router-link to="/index" tag="li">购票</router-link>
			<router-link to="/index" tag="li">商城</router-link>
			<router-link to="/index" tag="li">发现</router-link>
		</ul>
		<router-link to="/index" tag="div" class="person">
			<img src="../../images/ico_my.png" alt="">
		</router-link>
	</div>
</template>
<script>
	export default {
		data() {
			return{
			}
		},
		props:[],
		methods: {
		}
	}
</script>
<style lang="less" scoped>
	@import '../../style/mixin.less';

	#nav{
		.wh(100%,1rem);
		.fixed;
		z-index: 999;
		background-color: #1c2635;
		.sc(.32rem,#fff);
		display: flex;
		.logo{
			.wh(1.5rem,100%);
			padding: .3rem .1rem;
			img{
				.wh(100%,100%);
			}
		}
		.tab{
			flex:1;
			display: flex;
			li{
				flex:1;
				.flex();
				color: #fff;
				margin-bottom: 1px;
			}
			.active{
				border-bottom: 1px solid #fff;
			}
		}
		.person{
			.wh(1rem,100%);
			.flex();
			img{
				.wh(.4rem,50%);
			}
		}
	}
</style>