<template>
	<div id="hot">
		<head-top></head-top>
		<search-bar showPlace="true"></search-bar>
		<div class="thefilm">
			<ul>
				<li class="movielist" v-for="item in movieList.ms" :data-movieid="item.id">
					<div class="movieimg">
						<img :src="item.img" alt="">
					</div>
					<div class="movie-detail">
						<div class="name">
								<h3>{{item.tCn}}</h3>
								<span>{{item.r}}</span>
						</div>
						<div class="info">
							{{item.commonSpecial}}
						</div>
						<div class="tag">
							<span v-for="val in item.versions">{{val.version}}</span>
						</div>
						<div class="cinema">
							{{item.NearestCinemaCount}}家影院上映{{item.NearestShowtimeCount}}场
						</div>
						<button>购票</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import headTop from '../header'
	import searchBar from '../../../components/common/searchBar'

	export default {
		data() {
			return {
				movieList: {}
			}
		},
		components:{
			headTop,
			searchBar
		},
		beforeMount() {
			let cityId = window.localStorage.getItem("cityId") || 290;
			let that = this;
			this.$http.get('list/Showtime/LocationMovies.api?locationId=' + cityId)
			.then(function(data){
				that.movieList = data.data;
			})
		}
	}
</script>
<style lang="less" scoped>
	@import '../../../style/mixin.less';

  #hot{
  	padding-top: 2rem;
  	background-color: #fff;
  	.thefilm{
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
  }
  
</style>