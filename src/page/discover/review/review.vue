<template>
    <div id="review">
			<nav-bar active="3"></nav-bar>
			<find-nav active="3"></find-nav>
			<router-link :to="{ name: 'newsDetail', params: { reviewId: reviewImg.reviewID }}" tag="div" class="review-banner">
				<img :src="reviewImg.imageUrl" alt="" :title="reviewImg.title">
			</router-link>
			<div class="review-list">
				<div class="review">
					<h3>找你啊你弟弟ibc</h3>
					<div class="detail">
						<div class="img">
							<img src="../../../images/user.jpg" alt="">
						</div>
						<div class="name">
							l;l;smcf;slot="" - 评分 《说是说》 
						</div>
						<div class="score">
							8.7
						</div>
					</div>
				</div>
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
				reviewImg:{}
			}
		},
		components:{
			navBar,
			footGuide,
			findNav
		},
		mounted(){
			this.getreviewImg();
		},
		methods:{
			getreviewImg(){
				this.$http.get('list/PageSubArea/GetRecommendationIndexInfo.api')
				.then((res) => {
					this.reviewImg = res.data.review;
					console.log(this.reviewImg);
				})
				.catch((error) => {
					console.log(error);
				});
			},
		}
	}
</script>

<style lang="less" scoped>
@import "../../../style/mixin.less";

.review-list{
	background-color: #fff;
}
.review{
	display: flex;
	flex-direction: column;
	padding: .3rem;
	border-bottom: 1px solid #e6e6e6;
	h3{
		.sc(.36rem,#333);
		padding-bottom: .2rem;
	}
	.detail{
		display: flex;
		align-items: center;
		.img{
			.wh(.5rem,.5rem);
			margin-right: .2rem;
			img{
				.wh(100%,100%);
				border-radius: 50%;
			}
		}
		.name{
			.sc(.26rem,#999);
		}
		.score{
			background-color: #659d0e;
			color: #fff;
			padding: .1rem;
		}
	}
}
</style>