<template>
  <div id="news">
		<nav-bar active="3"></nav-bar>
		<find-nav active="0"></find-nav>
		<router-link :to="{ name: 'newsDetail', params: { newsId: newsImg.news.newsID }}" tag="div" class="news-banner" :id="newsImg.news.newsID">
			<img :src="newsImg.news.imageUrl" alt="" :title="newsImg.news.title">
		</router-link>
		<div class="news-list">
			<router-link :to="{ name: 'newsDetail', params: { newsId: item.id }}" tag="div"  class="news" v-for="(item,i) in newsList" :key="i" :id="item.id">
				<div class="tag" v-if="item.tag!='无'">{{item.tag	}}</div>
				<div class="news-detail" v-if="item.images.length==0">
					<div class="news-img">
						<img :src="item.image" alt="">
					</div>
					<div class="news-text">
						<div class="news-title">{{item.title}}</div>
						<div class="time-comment">
							<span>{{time(item.publishTime)}}</span>
							<span>评论{{item.commentCount}}</span>
						</div>
					</div>
				</div>
				<div class="news-detail wrap" v-else>
					<div class="news-title">{{item.title}}</div>
					<div class="news-imgs">
						<img :src="img.url1" alt="" v-for="(img,index) in item.images" :key="index">
					</div>
					<div class="time-comment">
						<span>{{time(item.publishTime)}}</span>
						<span>评论{{item.commentCount}}</span>
					</div>
				</div>
			</router-link>
		</div>
		<foot-guide></foot-guide>
  </div>
</template>

<script>
	import navBar from "../../../components/navBar/navBar"
	import footGuide from "../../../components/footer/footGuide"
	import findNav from "../../../components/findNav/findNav.vue"
	export default{
		data(){
			return{
				newsImg:{},
				newsList:[]
			}
		},
		components:{
			navBar,
			footGuide,
			findNav
		},
		mounted(){
			this.getNewsImg();
			this.getNewsList();
		},
		methods:{
			getNewsImg(){
				this.$http.get('list/PageSubArea/GetRecommendationIndexInfo.api')
				.then((res) => {
					this.newsImg = res.data;
				})
				.catch((error) => {
					console.log(error);
				});
			},
			getNewsList(){
				this.$http.get('list/News/NewsList.api?pageIndex=1')
				.then((res) => {
					this.newsList = res.data.newsList;
					console.log(this.newsList);
				})
				.catch((error) => {
					console.log(error);
				});
			},
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
@import "../../../style/mixin.less";

.news-banner{
	.wh(100%,4rem);
	img{
		.wh(100%,100%);
	}
}
.news-list{
	background-color: #fff;
	padding: 0 .3rem;
}
.news{
	position: relative;
	padding: .3rem 0;
	border-bottom: 1px solid #e6e6e6;
	.tag{
		position: absolute;
		left: 0;
		top: 0;
		background-color: red;
		.sc(.24rem,#fff);
	}
	.wrap{
		flex-direction: column;
	}
	.news-detail{
		.flex(flex-start,flex-start);
		.news-img{
			.wh(1.8rem,1.8rem);
			margin-right: .2rem;
			img{
				.wh(100%,100%);
			}
		}
		.news-text{
			flex:1;
		}
		.news-title{
			.sc(.34rem,#333);
			padding-bottom: .2rem;
		}
		.time-comment{
			padding-top: .2rem;
			span:nth-child(1){
				margin-right: .5rem; 	
			}
		}
		.news-imgs{
			display: flex;
			width: 100%;
			img{
				flex:1;
				max-width: 33.3%;
				margin-right: 2px;
				height: 1.8rem;
			}
		}
	}
}
</style>

