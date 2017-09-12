<template>
	<div id="search-bar">
		<router-link to="/citylist" tag="div" class="place" v-show="showPlace">
			<span>{{cityName}}</span>
			<b>∨</b>
		</router-link>
		<div class="search-input" @click="toSearch">
			<span class="search-icon"></span>
			<input type="text" placeholder="影片/影院/影人，任你搜">
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return{
				cityName: ""
			}
		},
		created() {
			let city = window.localStorage.getItem("cityName") || "上海";
			this.cityName = city;
		},
		props:["showPlace"],
		methods:{
			toSearch(){
				this.$router.push('/search');
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../style/mixin.less";
	#search-bar{
		.fixed(0,1rem);
		.wh(100%,1rem);
		.flex();
		background-color: #f6f6f6;
	}
	.place{
		.sc(.32rem,#777);
	}
	.search-input{
		.wh(70%,1rem);
		background-color: #f6f6f6;
		.flex;
		input{
			.wh(70%,.7rem);
			outline: none;
			border: 1px solid #bbb;
			border-left: none;
			.border-radius(0 .2rem .2rem 0);
		}
		.search-icon{
			.flex;
			.wh(.7rem,.7rem);
			background: #fff url(../../images/search_ico_01.png) .15rem .15rem no-repeat;
			background-size: .35rem .35rem;
			border: 1px solid #bbb;
			border-right: none;
			.border-radius(.2rem 0 0 .2rem);
		}
	}
</style>