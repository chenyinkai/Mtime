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
      <router-link :to="{ name: 'newsComment', params: {} }" class="comment">
        评论{{newsDetail.commentCount}}
      </router-link>
      <div class="relations">
        相关影人/影片
      </div>
    </div>
    <div class="" v-html="newsDetail.content"></div>
    <div class="tool">
      <i>
        <span>42</span>
      </i>
      <div class="btn">
        相关影人/影片
      </div>
    </div>
    <foot-guide></foot-guide>
    <back-top></back-top>
  </div>
</template>

<script>
import footGuide from '../../components/footer/footGuide'
import backTop from '../../components/common/backtop.vue'
import headTop from '../../components/header/head.vue'

export default {
  data(){
    return{
      newsDetail:{}
    }
  },
  components:{
    footGuide,
    backTop,
    headTop
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    let newsId = this.$route.params.newsId;
    let _this = this;
    this.$http.get('list/News/Detail.api?newsId=' + newsId)
    .then(function(data){
      _this.newsDetail = data.data;
    })
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
    }
    .relations{
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
        position: absolute;
        right: -0.1rem;
        top: -0.1rem;
        color: #fff;
        background-color: red;
        border-radius: 50%;
        // padding: 0.5rem;
      }
    }
    .btn{
      border: 1px solid #ccc;
      border-radius: .2rem;
      padding: .1rem .2rem;
      color: #ccc;
    }
  }
}
</style>
