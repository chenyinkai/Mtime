<template>
    <div id="toplist">
			<nav-bar active="3"></nav-bar>
			<find-nav active="2"></find-nav>
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

			}
		},
		components:{
			navBar,
			footGuide,
			findNav
		},
		mounted(){

		},
		methods:{

		}
	}
</script>

<style lang="less" scoped>
@import "../../../style/mixin.less";

</style>