// import App from '../App.vue';
const index = r => require.ensure([], () => r(require('../page/index/index.vue')), 'index');
const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home');
const hot = r => require.ensure([], () => r(require('../page/home/children/hot.vue')), 'hot');
const come = r => require.ensure([], () => r(require('../page/home/children/come.vue')), 'come');
const citylist = r => require.ensure([], () => r(require('../page/citylist/citylist.vue')), 'citylist');
const search = r => require.ensure([], () => r(require('../page/search/search.vue')), 'search');
const list = r => require.ensure([], () => r(require('../page/search/children/list.vue')), 'list');

export default [
	{
    path: '/',
    redirect: '/index'
  },
  {
    path: "/index",
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