<template>
	<div id="come">
		<head-top></head-top>
		<search-bar showPlace="true"></search-bar>
		<div class="atte-title">
			<h3>最受关注</h3>
			<span>(10部)</span>
		</div>
		<div class="pad">
			<div class="attention swiper-container">
				<ul class="swiper-wrapper">
					<li class="movie swiper-slide" v-for="item in attentionMovieList" :data-movieid="item.id">
						<span class="time">{{item.releaseDate}}</span>
						<div class="movie-img">
							<img :src="item.image" alt="">
						</div>
						<div class="movie-info">
							<div class="movie-title">{{item.title}}</div>
							<div class="movie-tag">
								<span class="look-num"><b>{{item.wantedCount}}</b>人想看-</span>
								<span class="tag">{{item.type}}</span>
							</div>
							<div class="director">导演：{{item.director}}</div>
							<div class="performer">演员：{{item.actor1}};{{item.actor2}}</div>
							<div class="btn-box">
								<button>超前预售</button>
								<button>预告片</button>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import '../../../plugins/swiper.min.js'
	import headTop from '../header'
	import searchBar from '../../../components/common/searchBar'
	import { mapState } from 'vuex'

	export default{
		data() {
			return {
				attentionMovieList:[],
				movieComingList:[]
			}
		},
		components:{
			headTop,
			searchBar
		},
		computed: {
			...mapState([
        'cityId'
      ])
		},
		mounted() {
			//获取数据
			let that = this;
			this.$http.get("list/Movie/MovieComingNew.api?locationId=" + this.cityId)
			.then(function(data){
				that.attentionMovieList = data.data.attention;
				that.movieComingList = data.data.moviecomings;
				that.$nextTick(function(){
          new Swiper('.swiper-container', {
		        loop: true
			    });
        })
			});
		}
	}
</script>
<style lang="less" scoped>
	@import '../../../style/mixin.less';
	@import '../../../style/swiper.min.css';

	#come{
		padding-top: 2rem;
		background-color: #fff;
	}
	.pad{
		padding: 0 .3rem;
		box-sizing: border-box;
		width: 100%;
	}
	.atte-title{
		.padding(0,.3rem);
		.flex(center,flex-start);
		.sc(.4rem,#000);
		font-weight: 700;
		.wh(100%,.8rem);
		span{
			.sc(.32rem,#777);
		}
	}
	.attention{
		box-sizing: border-box;
		.wh(100%,auto);
		.movie{
			position: relative;
			padding-top: .5rem;
			.flex(flex-start,flex-start);
			.time{
				position: absolute;
				left: 0;
				top: 0.05rem;
				.sc(.24rem,#777);
			}
		}
		.movie-img{
			.wh(1.6rem,2.7rem);
			img{
				.wh(100%,100%);
				display: block;
			}
		}
		.movie-info{
			padding-left: .2rem;
			flex:1;
			.movie-title{
				font-weight: 700;
				.sc(.36rem,#000);
				margin-bottom: .1rem;
			}
			.movie-tag{
				.sc(.24rem,#777);
				margin-bottom: .1rem;
				b{
					.sc(.28rem,orange);
					padding-right: .1rem;
				}
			}
			.director,.performer{
				.sc(.24rem,#777);
				margin-bottom: .1rem;
			}
			.btn-box{
				.flex(center,space-between);
				padding-right: .3rem;
				button{
					flex:1;
					.border-radius(.1rem);
					.margin(.1rem,0);
				}
				button:nth-child(1){
					background-color: orange;
					.sc(.28rem,#fff);
					padding: .1rem;
					margin-right: .2rem;
				}
				button:nth-child(2){
					.sc(.28rem,#659c0d);
					border: 1px solid #659c0d;
					padding: .1rem;
				}
			}
		}
	}
</style>
