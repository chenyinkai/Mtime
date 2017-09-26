<template>
  <div id="news-comment">
    <head-top :title="title"></head-top>
    <div class="commen-list">
      <div class="user-comment" v-for="(item,index) in comment" :data-id="item.id">
        <div class="user-img">
          <img :src="item.userImage" alt="">
        </div>
        <div class="detail">
          <div class="user-name">
            <h3>{{item.nickname}}</h3>
            <span>{{item.date}}</span>
          </div>
          <p>
            {{item.content}}
          </p>
          <div class="reply-box">
            <div class="reply-btn">
              <i></i>
              {{item.replyCount}}
            </div>
          </div>
        </div>
        <div class="reply-list" v-if="item.replyCount != 0">
          <div class="triangle"></div>
          <div class="reply" v-for="val in item.replies" :data-id="val.id">
            <div class="reply-name">
              <h3>{{val.nickname}}</h3>
              <span>{{val.date}}</span>
            </div>
            <div class="reply-content">
              {{val.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more" v-show="comment.length >= 20" @click="changePage()">
      {{moreContent}}
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
      newsId:"",        //id
      comment:[],       //评论详情
      page: 1,          //页码
      moreContent:"查看更多"
    }
  },
  components:{
    footGuide,
    backTop,
    headTop
  },
  beforeMount() {
    // document.documentElement.scrollTop = document.body.scrollTop = 0;
    let newsId = this.$route.params.newsId;
    this.newsId = newsId;
    this.getComment(this,newsId,1);
  },
  methods:{
    getComment(obj,id,page) {
      this.$http.get('list/News/Comment.api?newsId=' + id + '&pageIndex=' + page + '&reviewId=' + id)
      .then(function(data){
        for(let i = 0; i < data.data.length; i++){
          obj.comment.push(data.data[i]);
        }
        console.log(obj.comment);
      })
    },
    changePage() {
      if(this.page >= Math.ceil(this.title.substring(0,this.title.indexOf("条")) / 20)){
        this.moreContent = "没有更多了";
      }else{
        this.page = this.page + 1;
        this.getComment(this,this.newsId,this.page);
      }
    }
  },
  computed:{
    title() {
      if(this.comment[0]){
        return this.comment[0].totalCount + "条评论";
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../style/mixin.less";

#news-comment{
  margin-top: 1rem;
  background-color: #fff;
  .commen-list{
    .wh(100%,auto);
    padding: 0 .2rem;
  }
  .user-comment{
    padding: .2rem 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    .user-img{
      margin-right: .3rem;
      img{
        .wh(.96rem,.96rem);
        border-radius: 50%;
      }
    }
    .detail{
      flex:1;
      display: flex;
      flex-direction: column;
      .user-name{
        .flex(center,space-between);
        .sc(.24rem,#999);
      }
      p{
        margin: .2rem 0;
        font-size: .26rem;
      }
      .reply-box{
        .flex(flex-start,flex-end);
        .reply-btn{
          .flex(center,flex-end);
        }
        i{
          display: inline-block;
          .wh(.5rem,.5rem);
          background: url(../../images/ico_reply.png);
          background-size: cover;
          margin-right: .1rem;
        }
      }
    }
    .reply-list{
      margin-top: .2rem;
      width: 100%;
      border: 1px solid #d8d8d8;
      background-color: #f5f5f5;
      position: relative;
      .triangle{
        position: absolute;
        overflow: hidden;
        width: 2em;
        height: 2em;
        right: 1em;
        top: -1.8em;
        &:after{
          content: "";
          display: block;
          width: 2em;
          height: 2em;
          background: #f5f5f5;
          border: 1px solid #d8d8d8;
          margin-top: 1.5em;
          transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          z-index: 1;
        }
      }
      .reply{
        border: 1px solid #d8d8d8;
        padding: .2rem;
        .reply-name{
          .flex(center,space-between);
          .sc(.24rem,#999);
          margin-bottom: .2rem;
        }
        .reply-content{
          .sc(.24rem,#999);
        }
      }
    }
  }
  .more{
    .flex();
    .sc(.32rem,#0074c5);
    padding: .2rem 0;
  }
}
</style>
