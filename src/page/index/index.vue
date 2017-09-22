<template>
	<div id="index">
		<nav-bar></nav-bar>
		<search-bar showPlace="true"></search-bar>
		<div class="hot">
			<router-link tag="div" class="title" to="/home/hot">
				<span>正在热映（88）部</span>
				<span>></span>
			</router-link>
			<div class="movie-list">
				<div class="movie">
					<img src="../../images/get.jpg" alt="">
					<h3>刀剑神域：序列之争</h3>
					<span>7.8</span>
				</div>
				<div class="movie">
					<img src="../../images/get.jpg" alt="">
					<h3>刀剑神域：序列之争</h3>
					<span>7.8</span>
				</div>
				<div class="movie">
					<img src="../../images/get.jpg" alt="">
					<h3>刀剑神域：序列之争</h3>
					<span>7.8</span>
				</div>
				<div class="movie">
					<img src="../../images/get.jpg" alt="">
					<h3>刀剑神域：序列之争</h3>
					<span>7.8</span>
				</div>
				<div class="movie">
					<img src="../../images/get.jpg" alt="">
					<h3>刀剑神域：序列之争</h3>
					<span>7.8</span>
				</div>
				<div class="movie">
					<img src="../../images/get.jpg" alt="">
					<h3>刀剑神域：序列之争</h3>
					<span>7.8</span>
				</div>
				<div class="movie">
					<img src="../../images/get.jpg" alt="">
					<h3>刀剑神域：序列之争</h3>
					<span>7.8</span>
				</div>
				<div class="movie">
					<img src="../../images/get.jpg" alt="">
					<h3>刀剑神域：序刀剑神域：序列之争刀剑神域：序列之争列之争</h3>
					<span>7.8</span>
				</div>
			</div>
		</div>
		<router-link tag="div" to="/home/come" class="title pad">
			<span>正在热映（88）部</span>
			<span>></span>
		</router-link>
		<div class="news-list">
			<div class="title">今日热点</div>
			<div class="news">
				<img src="../../images/get.jpg" alt="">
				<div class="detail">
					<h3>回望电影中的战争</h3>
					<p>回望电影中的战争回望电影中的战争</p>
					<span>2017-08-25 00:00:00</span>
				</div>
			</div>
			<div class="news">
				<img src="../../images/get.jpg" alt="">
				<div class="detail">
					<h3>回望电影中的战争</h3>
					<p>回望电影中的战争回望电影中的战争</p>
					<span>2017-08-25 00:00:00</span>
				</div>
			</div>
			<div class="news">
				<img src="../../images/get.jpg" alt="">
				<div class="detail">
					<h3>回望电影中的战争</h3>
					<p>回望电影中的战争回望电影中的战争</p>
					<span>2017-08-25 00:00:00</span>
				</div>
			</div>
		</div>
		<foot-guide></foot-guide>

	</div>
</template>

<script>
	import navBar from "../../components/navBar/navBar"
	import searchBar from "../../components/common/searchBar"
	import footGuide from "../../components/footer/footGuide"

	export default{
		data() {
			return{

			}
		},
		components:{
			navBar,
			searchBar,
			footGuide
		}
	}
</script>

<style lang="less" scoped>
	@import "../../style/mixin.less";

	#index{
		margin-top: 2rem;
		background-color: #f5f5f5;
		position: relative;
		.hot{
			padding: 0 .2rem;
			border-bottom: 1px solid #ccc;
			border-top: 1px solid #ccc;
			background-color: #fff;
		}
		.title{
			.flex(center,space-between);
			height: 1rem;
			span:nth-child(1){
				.sc(.34rem,#000);
			}
			span:nth-child(2){
				.sc(.34rem,#ccc);
			}
		}
		.pad{
			padding: 0 .2rem;
			margin-top: .2rem;
			margin-bottom:.3rem;
			border-bottom: 1px solid #ccc;
			background-color: #fff;
		}
		.movie-list{
			.flex(flex-start,space-between);
			flex-wrap: wrap;
			.movie{
				width: 23%;
				position: relative;
				margin-bottom: .2rem;
				img{
					width: 100%;
				}
				h3{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				span{
					position: absolute;
					top: 0;
					right: 0;
					padding: .05rem;
					background-color: #659d0e;
					color: #fff;
				}
			}
		}
		.news-list{
			background-color: #fff;
			padding: 0 .2rem;
			margin-bottom: .2rem;
			border-bottom: 1px solid #ccc;
			border-top: 1px solid #ccc;
			.title{
				.sc(.34rem,#000);
			}
			.news{
				.flex(flex-start,space-between);
				padding: .2rem;
				border-bottom: 1px solid #ccc;
				img{
					width: 35%;
					margin-right: .2rem;
				}
				.detail{
					flex:1;
					height: 5rem;
					.flex(space-between,space-between);
					flex-direction: column;
				}
			}
		}
	}
</style>