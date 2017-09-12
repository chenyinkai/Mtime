<template>
	<div id="search-list">
		<ul class="search-tab">
			<li :class="'movie' == type?'active':''" @click="getType($event)" type="movie">影片（{{moviesCount}}）</li>
			<li :class="'person' == type?'active':''" @click="getType($event)" type="person">影人（{{personscount}}）</li>
			<li :class="'cinema' == type?'active':''" @click="getType($event)" type="cinema">影院（{{locationCinemasCount}}）</li>
		</ul>
		<div class="search-end">
			<div class="search-results">
				<ul v-if="type == 'movie'">
					<div class="no-result" v-if="moviesCount == 0">
						<img src="../../../images/m_search.png" alt="">
						<p>抱歉，没有找到"{{keyword}}"的相关结果</p>
						<p>请您检查输入或者尝试其他关键词</p>
					</div>
					<li class="movielist" v-if="moviesCount != 0" v-for="movie in movies" :data-movieID="movie.id">
						<div class="movieimg">
							<img :src="movie.img" alt="">
						</div>
						<div class="movie-detail">
							<div class="name">
									<h3>{{movie.name}}</h3>
									<span>{{movie.rating}}</span>
							</div>
							<div class="info">
								{{movie.commonSpecial}}
							</div>
							<div class="tag">
								<span>{{movie.movieType}}</span>
							</div>
							<div class="cinema">
								<span v-for="actors in movie.actors">主演:{{actors}}</span>
							</div>
							<button>购票</button>
						</div>
					</li>
				</ul>
				<ul v-if="type == 'person'">
					<div class="no-result" v-if="personsCount == 0">
						<img src="../../../images/m_search.png" alt="">
						<p>抱歉，没有找到"{{keyword}}"的相关结果</p>
						<p>请您检查输入或者尝试其他关键词</p>
					</div>
					<li class="movielist" v-if="personsCount != 0">
						<div class="movieimg">
							<!-- <img :src="item.img" alt=""> -->
						</div>
						<div class="movie-detail">
							<div class="name">
									<h3>item.tCn</h3>
									<span>item.r</span>
							</div>
							<div class="info">
								item.commonSpecial
							</div>
							<div class="tag">
								<span>val.version</span>
							</div>
							<div class="cinema">
								item.NearestCinemaCount家影院上映item.NearestShowtimeCount场
							</div>
							<button>购票1</button>
						</div>
					</li>
				</ul>
				<ul v-if="type == 'cinema'">
					<div class="no-result" v-if="locationCinemasCount == 0">
						<img src="../../../images/m_search.png" alt="">
						<p>抱歉，没有找到"{{keyword}}"的相关结果</p>
						<p>请您检查输入或者尝试其他关键词</p>
					</div>
					<li class="movielist" v-if="locationCinemasCount != 0">
						<div class="movieimg">
							<!-- <img :src="item.img" alt=""> -->
						</div>
						<div class="movie-detail">
							<div class="name">
									<h3>item.tCn</h3>
									<span>item.r</span>
							</div>
							<div class="info">
								item.commonSpecial
							</div>
							<div class="tag">
								<span>val.version</span>
							</div>
							<div class="cinema">
								item.NearestCinemaCount家影院上映item.NearestShowtimeCount场
							</div>
							<button>购票2</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				keyword:"",   //关键词
				type:"movie",  //分类类型 默认movie
				locationCinemas: [],   //当地影院
				locationCinemasCount: "loading",   //当地影院数目
				movies: [],   //影视
				moviesCount: "loading",  //影视数目
				persons: [],   //影人
				personscount: "loading"   //影人数目
			}
		},
		mounted() {
			let that = this;
			let keyword = this.$route.params.keyword;
			let cityId = window.localStorage.getItem("cityId");
			this.keyword = keyword;
			this.$http.get("list/Showtime/SearchVoice.api?keyword="+keyword+"&pageIndex=1&searchType=3&locationId=" + cityId)
			.then(function(data){
				console.log(data);
				that.locationCinemas = data.data.locationCinemas;
				that.locationCinemasCount = data.data.locationCinemasCount || 0;
				that.movies = data.data.movies;
				that.moviesCount = data.data.moviesCount || 0;
				that.persons = data.data.persons;
				that.personscount = data.data.personscount || 0;
			})
		},
		methods: {
			getType(e){
				this.type = e.target.getAttribute("type");
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../style/mixin.less"; 
	/* 父子路由之间的跳转，设子路由定位即可覆盖父组件的内容 */
	#search-list{
		position: fixed;
		left: 0;
		top: 1rem;
		padding-bottom: 1rem;
		background-color: #ebebeb;
		.wh(100%,100%);
		overflow-y: scroll;
	}
	.search-tab{
		.wh(100%,1rem);
		.flex();
		.sc(.32rem,#777);
		.active{
			color: #1e7dd7;
			font-weight: 600;
			border-bottom-color: #1e7dd7;
		}
		li{
			border-bottom: 1px solid #ebebeb;
			.wh(33.33%,100%);
			.flex();
		}
	}
	.search-results{
  	padding: .3rem;
  }
  .movielist{
  	.flex(flex-start,space-between);
  	padding: .2rem 0;
  	border-bottom: 1px solid #ccc;
  	.movieimg{
  		.wh(1.6rem,2.7rem);
  	}
  	img{
  		.wh(100%,100%);
  		display: block;
  	}
  }
  .movie-detail{
		flex: 1;
		padding-left: .4rem;
		display: flex;
		flex-direction: column;
  }
  .name{
  	.flex(center,flex-start);
  	h3{
  		.sc(.3rem,#000);
  		font-weight: 600;
  	}
  	span{
  		background-color: #659d0e;
  		.sc(.2rem,#fff);
  		margin-left: .2rem;
  		padding: 0 .1rem;
  	}
  }
  .info{
  	.sc(.28rem,#659d0e);
  	.margin(.1rem,0);
  }
  .tag{
  	.margin(.1rem,0);
  	span{
  		border: 1px solid #659d3e;
  		.sc(.2rem,#659d3e);
  		padding: .05rem;
  		.margin(0,.1rem);
  	}
  }
  .cinema{
  	.margin(.2rem,0);
  	.sc(.24rem,#999);
  }
  button{
  	background-color: #ff8600;
  	.sc(.26rem,#fff);
  	.wh(1.2rem,.6rem);
  	.border-radius(.2rem);
  	align-self:flex-end;
  	outline: none;
  }
	.no-result{
		.flex();
		flex-direction: column;
		padding-top: 3rem;
		p{
			.sc(.32rem,#666);
			.margin(.2rem,0);
		}
	}
</style>