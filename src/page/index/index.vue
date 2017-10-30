<template>
	<div id="index">
		<nav-bar active="0"></nav-bar>
		<search-bar showPlace="true"></search-bar>
		<div class="hot">
			<router-link tag="div" class="title" to="/home/hot">
				<span>正在热映（{{movieList.totalComingMovie}}）部</span>
				<span>></span>
			</router-link>
			<div class="movie-list">
				<div class="movie" v-for="(item,i) in hotMovieList" :data-id="item.id" :key="i">
					<img :src="item.img" alt="">
					<h3>{{item.tCn}}</h3>
					<span>{{item.r}}</span>
				</div>
			</div>
		</div>
		<router-link tag="div" to="/home/come" class="title pad">
			<span>即将热映（{{comeMovieTotal}}）部</span>
			<span>></span>
		</router-link>
		<div class="news-list">
			<div class="title">今日热点</div>
			<router-link :to="{ name: 'newsDetail', params: { newsId: val.id }}" tag="div" class="news" v-for="(val,index) in hotPoints" :data-id="val.id" :key = "index">
				<img :src="val.img" alt="">
				<div class="detail">
					<h3>{{val.title}}</h3>
					<p>{{val.desc}}</p>
					<span>{{time(val.publishTime)}}</span>
				</div>
			</router-link>
		</div>
		<foot-guide></foot-guide>

	</div>
</template>

<script>
	import navBar from "../../components/navBar/navBar"
	import searchBar from "../../components/common/searchBar"
	import footGuide from "../../components/footer/footGuide"
	import { mapState } from 'vuex'

	export default{
		data() {
			return{
				movieList: {},
				comeMovieTotal: "",
				hotPoints:[]
			}
		},
		components:{
			navBar,
			searchBar,
			footGuide
		},
		mounted() {
			let that = this;
			this.$http.get('list/Showtime/LocationMovies.api?locationId=' + this.cityId)
			.then(function(data){
				that.movieList = data.data;
			});
			this.$http.get("list/Movie/MovieComingNew.api?locationId=" + this.cityId)
			.then(function(data){
				that.comeMovieTotal = data.data.moviecomings.length;
			});
			this.$http.get("list/PageSubArea/GetFirstPageAdvAndNews.api")
			.then(function(data){
				that.hotPoints = data.data.hotPoints;
			});
		},
		computed:{
			hotMovieList() {
				if(this.movieList.ms){
					return this.movieList.ms.slice(0,8);
				}
			},
			...mapState([
        'cityId'
      ])
		},
		methods:{
			time(inputTime){
				var time = inputTime * 1000;
			  var date = new Date(time);
			  var y = date.getFullYear();
			  var m = date.getMonth() + 1;
			  m = m < 10 ? ('0' + m) : m;
			  var d = date.getDate();
			  d = d < 10 ? ('0' + d) : d;
			  var h = date.getHours();
			  h = h < 10 ? ('0' + h) : h;
			  var minute = date.getMinutes();
			  var second = date.getSeconds();
			  minute = minute < 10 ? ('0' + minute) : minute;
			  second = second < 10 ? ('0' + second) : second;
			  return y + '-' + m + '-' + d +' '+ h +':'+ minute +':'+ second;
			}
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
					height: 2.3rem;
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
					height: 100%;
					margin-right: .2rem;
				}
				.detail{
					flex:1;
					.flex(space-between,space-between);
					flex-direction: column;
					h3{
						.sc(.36rem,#000);
					}
					p{
						.sc(.3rem,#666);
						margin: .2rem 0;
					}
					span{
						.sc(.26rem,#ccc);
					}
				}
			}
		}
	}
</style>
