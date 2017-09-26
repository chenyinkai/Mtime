<template>
	<div id="citylist" class="paddingTop">
		<common-header title="选择城市"></common-header>
		<div class="search">
			<span class="search-icon"></span>
			<input type="text" placeholder="请输入城市首字母缩写" v-model="keyword" @keydown="search">
		</div>
		<div v-if="hasSearchResult">
			<div class="no-search-result" v-if="!noSearchResult">当前无此城市</div>
			<div class="city-sort" v-if="noSearchResult">
				<div class="title">当前城市:</div>
				<ul class="city-list">
					<li>定位失败</li>
				</ul>
			</div>
			<div class="city-sort" v-if="noSearchResult">
				<div class="title">热门城市:</div>
				<ul class="city-list">
					<li v-for="(item,index) in hotCity" :data-cityid="item.id" @click="getCity($event)">{{item.n}}</li>
				</ul>
			</div>
			<div class="city-sort" v-for="item in initial">
				<div class="title">{{item}}</div>
				<ul class="city-list">
					<li v-for="val in citylist" v-if="val.pinyinFull.substring(0,1) == item" :data-cityid="val.id" @click="getCity($event)">{{val.n}}</li>
				</ul>
			</div>
		</div>
		<div class="search-list" v-if="!hasSearchResult">
			<ul>
				<li v-for="city in searchResult" :data-cityid="city.id" @click="getCity($event)">{{city.name}}</li>
			</ul>
		</div>
		<!--回到顶部-->
		<backtop></backtop>
	</div>
</template>
<script>
	import city from '../../config/city.json';
	import backtop from '../../components/common/backtop'
	import commonHeader from '../../components/header/head'
	import {mapState,mapMutations} from 'vuex'

	export default{
		name: "citylist",
		data() {
			return{
				citylist: [],
				initial: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
				keyword: "",
				num: 0,               //keydown次数
				noSearchResult: true, //没有搜索结果
				hasSearchResult: true, //由搜索结果
				searchResult:[]  //搜索结果
			}
		},
		components:{
			backtop,
			commonHeader
		},
		beforeMount() {
			this.citylist = city.p;
			// this.$http.get('/list/Showtime/HotCitiesByCinema.api')
			// .then(function(data){
			// 	console.log(data.data.p);
			// })
		},
		computed: {
			hotCity() {
				return this.citylist.slice(0,8);
			},
			...mapState([
        'cityId',
        'cityName'
      ])
		},
		methods: {
			...mapMutations([
        'CHOOSE_CITYID',
        'CHOOSE_CITYNAME',
        'CHOOSE_CITY'
      ]),
			getCity(e) {
				//通过传递 $event 取得属性
				let id = e.target.getAttribute('data-cityid');
				let name = e.target.innerText;
				this.CHOOSE_CITY({id,name});
				this.$router.push({path: '/index'});
			},
			search(ev) {
				let n = -1;
				this.searchResult = [];
				if(ev.keyCode >= 65 && ev.keyCode <= 90){
					this.num++;
					for(let i = 65; i <= 90; i++){
						n++;
						if(ev.keyCode == i){
							var code = this.initial[n];
						}
					}
					for(let i = 0, t = this.citylist.length; i < t; i++){
						if(this.num == 1){
							if(this.citylist[i].pinyinShort.substring(0,1) == code.toLowerCase()){
								this.hasSearchResult = false;
								this.searchResult.push({
									name: this.citylist[i].n,
									id : this.citylist[i].id
								});
							}
							if(this.searchResult.length == 0){
								this.hasSearchResult = true;
								this.noSearchResult = false;
							}
						}else if(this.num == 2 && this.keyword == this.citylist[i].pinyinShort.substring(0,1)){
							if(this.citylist[i].pinyinShort.substring(1,2) == code.toLowerCase()){
								this.hasSearchResult = false;
								this.searchResult.push({
									name: this.citylist[i].n,
									id : this.citylist[i].id
								});
							}
							if(this.searchResult.length == 0){
								this.hasSearchResult = true;
								this.noSearchResult = false;
							}
						}else if(this.num > 2){
							this.noSearchResult = false;
							this.hasSearchResult = true;
						}
					}
				}else if(ev.keyCode >= 48 && ev.keyCode <= 57){
					this.noSearchResult = false;
				}else if(ev.keyCode == 8){
					this.num--;
					if(this.num < 0){
						this.num == 0;
					}
				}else{
					return false;
				}
			}
		},
		watch: {
			keyword:function(){
				if(this.keyword.length == 0){
					this.noSearchResult = true;
					this.num = 0;
					this.hasSearchResult = true;
				}
			}
		}
	}
</script>
<style scoped lang="less">
@import '../../style/mixin.less';

.search{
	.wh(100%,1rem);
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
.city-sort{
	.wh(100%,auto);
	.sc(.32rem,#777);
	.flex(flex-basis,flex-start);
	flex-direction: column;
	.title{
		.wh(100%,.6rem);
		.flex(center,flex-start);
		padding-left: .3rem;
	}
	.city-list{
		background-color: #fff;
		padding-left: .3rem;
		min-height: .8rem;
		.flex(center,flex-start);
		flex-wrap: wrap;
		li{
			padding: .2rem .4rem .2rem 0;
		}
	}
}
.no-search-result{
	.wh(100%,1rem);
	.flex(center,flex-start);
	.sc(.32rem,#777);
	padding-left: .3rem;
}
.search-list{
	li{
		.wh(100%,.8rem);
		background-color: #fff;
		border-bottom: 1px solid #bbb;
		padding-left: .3rem;
		.sc(.3rem,#777);
		.flex(center,flex-start);
	}
}
</style>