<template>
  <div id="fina-nav">
		<ul>
			<router-link to="/news" tag="li" :class="active==0?'active':''">新闻</router-link>
			<router-link to="/trailer" tag="li" :class="active==1?'active':''">预告片</router-link>
			<router-link to="/toplist" tag="li" :class="active==2?'active':''">排行榜</router-link>
			<router-link to="/review" tag="li" :class="active==3?'active':''">影评</router-link>
		</ul>
  </div>
</template>

<script>
	export default {
		data(){
			return{
			}
		},
		props:["active"]
	}   
</script>

<style lang="less" scoped>
@import "../../style/mixin.less";

#fina-nav{
	margin-top: 1rem;
	ul{
		height: .8rem;
		background-color: #fff;
		font-size: .3rem;
		.flex(center,space-around);
		li{
			flex:1;
			.flex();
			&.active{
				color:#0074c5;
			}
		}
	}

}
</style>


