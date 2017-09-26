<template>
	<div id="search">
		<common-header title="搜索"></common-header>
		<search-bar></search-bar>
		<div class="before-search">
			<div class="banner swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for="item in advList" :style="{backgroundImage:'url('+item.url+')'}"></li>
				</ul>
				<!-- 如果需要分页器 -->
    		<div class="swiper-pagination"></div>
			</div>
			<div class="hot-search">
				<div class="title">
					热门搜索
				</div>
				<div class="hot-content">
					<ul>
						<router-link :to="{ name: 'list', params: { keyword: val }}" tag="li" v-for="(val,index) in hotSearch" :key = "index">{{val}}</router-link>
					</ul>
				</div>
			</div>
		</div>
		<transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
	</div>
</template>
<script>
	import commonHeader from "../../components/header/head"
	import searchBar from "../../components/common/searchBar"
	import "../../plugins/swiper.min.js"
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				advList:[],
				hotSearch:[]
			}
		},
		components:{
			commonHeader,
			searchBar
		},
		computed:{
			...mapState([
        'cityId'
      ])
		},
		mounted() {
			let that = this;
			this.$http.get("/list/Advertisement/MobileAdvertisementInfo.api?locationId=" + this.cityId)
			.then(function(data){
				that.advList = data.data.advList.slice(0,2);
				that.$nextTick(function(){
          new Swiper('.swiper-container', {
		        loop: true
			    });
      	})
			})

			this.$http.get("/list/Search/HotKeyWords.api")
			.then(function(data){
				that.hotSearch = data.data.keywords;
			})
		}
	}
</script>
<style lang="less" scoped>
	@import "../../style/mixin.less";
	@import "../../style/swiper.min.css";

	#search{
		padding-top: 2rem;
	}
	.banner{
		height: 2rem;
		li{
			background-size: cover;
		}
	}
	.hot-search{
		.wh(100%,auto);
		.title{
			.wh(100%,1rem);
			.flex(center,flex-start);
			padding-left: .3rem;
			.sc(.32rem,#777);
		}
		.hot-content{
			min-height:4rem;
			background-color: #fff;
			ul{
				display: flex;
				flex-wrap: wrap;
				.padding(.5rem,.3rem);
			}
			li{
				.sc(.26rem,#1e7dd7);
				border: 1px solid #b6dcff;
				padding: .2rem;
				.border-radius(.2rem);
				margin: .2rem;
			}
		}
	}
	.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>