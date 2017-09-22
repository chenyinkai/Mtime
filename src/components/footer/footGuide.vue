<template>
	<div id="footer">
		<ul class="footer-top">
			<router-link to="/index" tag="li">首页</router-link>
			<router-link to="/buy" tag="li">购票</router-link>
			<router-link to="/shop" tag="li">商城</router-link>
			<router-link to="/index" tag="li">发现</router-link>
			<router-link to="/index" tag="li">我的</router-link>
		</ul>
		<ul class="footer-download">
			<router-link to="/index" tag="li">PC版</router-link>
			<router-link to="/index" tag="li">客户端下载</router-link>
			<router-link to="/index" tag="li">意见反馈</router-link>
			<router-link to="/index" tag="li">帮助中心</router-link>
		</ul>
		<div class="footer-logo">
			<img src="../../images/fot_logo.png" alt="">
			<p>Copyright 2006 - {{year}} Mtime.com Inc All rights reserved</p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				year:""
			}
		},
		created() {
			this.year = new Date().getFullYear();
		}
	}
</script>
<style lang="less" scoped>
	@import "../../style/mixin.less";
	
	#footer{
		position: absolute;
		left: 0;
		.wh(100%,3rem);
	}
	.footer-top{
		.flex(center,space-around);
		.wh(100%,1rem);
		background-color: #fff;
		li{
			flex:1;
			.flex();
			.sc(.32rem,#0074c5);
		}
	}
	.footer-download{
		.flex(center,space-around);
		.wh(100%,1rem);
		li{
			flex:1;
			.flex();
			.sc(.28rem,#999);
			border-right: 1px solid #777;
			&:nth-child(4){
				border-right: none;
			}
		}
	}
	.footer-logo{
		.flex(center,center);
		flex-direction: column;
		.wh(100%,1rem);
		img{
			height: .6rem;
		}
		p{
			.sc(.2rem,#ccc);
		}
	}
</style>