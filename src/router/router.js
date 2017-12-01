// import App from '../App.vue';
const index = r => require.ensure([], () => r(require('../page/index/index.vue')), 'index');
const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home');
const hot = r => require.ensure([], () => r(require('../page/home/children/hot.vue')), 'hot');
const come = r => require.ensure([], () => r(require('../page/home/children/come.vue')), 'come');
const citylist = r => require.ensure([], () => r(require('../page/citylist/citylist.vue')), 'citylist');
const search = r => require.ensure([], () => r(require('../page/search/search.vue')), 'search');
const list = r => require.ensure([], () => r(require('../page/search/children/list.vue')), 'list');
const news = r => require.ensure([], () => r(require('../page/discover/news/news.vue')), 'news');
const newsDetail = r => require.ensure([], () => r(require('../page/discover/news/newsDetail.vue')), 'newsDetail');
const newsComment = r => require.ensure([], () => r(require('../page/discover/news/newsComment.vue')), 'newsComment');
const trailer = r => require.ensure([], () => r(require('../page/discover/trailer/trailer.vue')), 'news');
const toplist = r => require.ensure([], () => r(require('../page/discover/toplist/toplist.vue')), 'toplist');
const review = r => require.ensure([], () => r(require('../page/discover/review/review.vue')), 'review');

export default [
	{
    path: '/',
    redirect: '/index'
  },
  {
    path: "/index",  //首页
    component: index
  },
  {
    path: '/home',   //home
    component: home,
    children: [
      {
        path: 'hot',  //正在热映
        component: hot
      },
      {
        path: 'come',  //即将上映
        component: come
      }
    ]
  },
  {
    path:'/news',   //新闻
    component:news
  },
	{
    path: '/news/comment/:newsId',   //新闻评论
		name: 'newsComment',
		component: newsComment
	},
	{
    path: '/news/detail/:newsId',   //新闻详情
		name: 'newsDetail',
		component: newsDetail
  },
  {
    path: '/trailer',   //预告片
    component: trailer
  },
  {
    path: '/toplist',   //排行榜
    component: toplist
  },
  {
    path: '/review',  //影评
    component: review
  },
  {
    path: '/citylist',  //选择城市
    component: citylist
  },
  {
    path: '/search',   //搜索
    component: search,
    children: [
      {
        path: 'list/:keyword', //热搜结果
        name: 'list',
        component: list
      }
    ]
  }
]
