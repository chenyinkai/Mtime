<template>
  <div id="news-detail">
    <head-top title="新闻详情"></head-top>
    <div class="title">
      {{newsDetail.title}}
    </div>
    <div class="info">
      <div class="time">
        {{newsDetail.time}}
      </div>
      <router-link :to="{ name: 'newsComment', params: { newsId: newsId } }" class="comment">
        评论{{newsDetail.commentCount}}
      </router-link>
      <div class="relations-btn" @click="changeRelationsState">
        相关影人/影片
      </div>
    </div>
    <div class="" v-html="newsDetail.content"></div>
    <div class="tool">
      <router-link :to="{ name: 'newsComment', params: { newsId: newsId } }" tag="i">
        <span>{{newsDetail.commentCount}}</span>
      </router-link>
      <div class="btn" @click="changeRelationsState">
        相关影人/影片
      </div>
    </div>
    <foot-guide></foot-guide>
    <back-top></back-top>
    <shade v-show="relationstShow" @changeMaskState="changeRelationsState"></shade>
    <transition name="router-slid">
      <div class="relations" v-show="relationstShow">
        <div class="relations-header">
          相关影人/影片
          <span @click="changeRelationsState">X</span>
        </div>
        <!-- 跳转到电影详情 -->
        <div class="relations-movie">
          <div class="movie" v-for="(val,index) in newsDetail.relations" :data-id="val.id" :key="index">
  					<img :src="val.image" alt="">
  					<h3>{{val.name}}</h3>
  					<span>{{val.rating}}</span>
  				</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import footGuide from '../../components/footer/footGuide'
import backTop from '../../components/common/backtop.vue'
import headTop from '../../components/header/head.vue'
import shade from '../../components/common/shade.vue'

export default {
  data(){
    return{
      newsId:"",
      newsDetail:{},
      relationstShow: false
    }
  },
  components:{
    footGuide,
    backTop,
    headTop,
    shade
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    let newsId = this.$route.params.newsId;
    this.newsId = newsId;
    let _this = this;
    this.$http.get('list/News/Detail.api?newsId=' + newsId)
    .then(function(data){
      _this.newsDetail = data.data;
      console.log(_this.newsDetail);
    })
  },
  methods:{
    changeRelationsState() {
      this.relationstShow = !this.relationstShow;
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../style/mixin.less";

#news-detail{
  width: 100%;
  overflow-x: hidden;
  background-color: #fff;
  .title{
    .sc(.5rem,#333);
    margin-top: 1rem;
    padding-top: .3rem;
    padding-left: .2rem;
  }
  .info{
    margin: .3rem 0;
    padding: 0 .2rem;
    display: flex;
    font-size: .3rem;
    .time{
      width: 50%;
      color: #ccc;
    }
    .comment{
      flex:1;
      color:#1e7dd7;
      cursor: pointer;
    }
    .relations-btn{
      cursor: pointer;
      color:#1e7dd7;
      width: 30%;
    }
  }
  .tool{
    padding: 0 .2rem;
    .flex(center,space-between);
    height: 1.2rem;
    i{
      .wh(.5rem,.5rem);
      background: url(../../images/ico_reply.png);
      background-size: cover;
      position: relative;
      span{
        cursor: pointer;
        position: absolute;
        right: -0.1rem;
        top: -0.1rem;
        color: #fff;
        background-color: red;
        border-radius: 50%;
      }
    }
    .btn{
      cursor: pointer;
      border: 1px solid #ccc;
      border-radius: .2rem;
      padding: .1rem .2rem;
      color: #ccc;
    }
  }
}
.relations{
  height: 4.3rem;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  .relations-header{
    position: relative;
    .flex();
    .sc(.32rem,#999);
    height: 1rem;
    border-bottom: 1px solid #ccc;
    span{
      position: absolute;
      right: .5rem;
      top: .3rem;
    }
  }
  .relations-movie{
    overflow-x: scroll;
    width: auto;
    display: flex;
    .movie{
      padding: .2rem;
      position: relative;
      img{
        height: 2.3rem;
      }
      h3{
        text-align: center;
      }
      span{
        position: absolute;
        top: .2rem;
        right: .2rem;
        padding: .05rem;
        background-color: #659d0e;
        color: #fff;
      }
    }
  }
}
.router-slid-enter-active, .router-slid-leave-active {
  transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
  transform: translate3d(0, 3rem, 0);
  opacity: 0;
}
</style>
