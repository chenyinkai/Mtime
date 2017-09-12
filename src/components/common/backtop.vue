<template>
	<div id="backtop" v-show="backtopShow"  @click="goTop">
		<div class="backtop-icon">
			
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return{
				backtopShow:false
			}
		},
		mounted() {
			window.addEventListener('scroll', this.showBacktopIcon);
		},
		beforeDestory() {
			window.removeEventListener('scroll', this.showBacktopIcon);
		},
		methods: {
			showBacktopIcon() {
				window.pageYOffset > 400 ? this.backtopShow = true :this.backtopShow = false;
			},
			goTop() {
				let timer = setInterval(function(){
		      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		      let ispeed = Math.floor(-scrollTop / 8);
		      if(scrollTop == 0){
		        clearInterval(timer)
		      }
		      document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed;
		    },1000/60);
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../style/mixin.less';
	
	#backtop{
		position: fixed;
		right: .5rem;
		bottom: 1rem;
		z-index: 9;
	}
	.backtop-icon{
		.wh(.95rem,.95rem);
		background: url(../../images/backtop1.png) no-repeat;
		background-size: contain;
	}
</style>