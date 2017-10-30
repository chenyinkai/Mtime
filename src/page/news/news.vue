<template>
  <div id="news">
		<nav-bar active="3"></nav-bar>
		<find-nav active="0"></find-nav>
		<router-link :to="{ name: 'newsDetail', params: { newsId: 1573921 }}" tag="div" class="news">
			kjnjakj
		</router-link>
		<foot-guide></foot-guide>
  </div>
</template>

<script>
	import navBar from "../../components/navBar/navBar"
	import footGuide from "../../components/footer/footGuide"
	import findNav from "../../components/findNav/findNav.vue"
	export default{
		data(){
			return{
					
			}
		},
		components:{
			navBar,
			footGuide,
			findNav
		}
	}
</script>

<style lang="less" scoped>
@import "../../style/mixin.less";

</style>

