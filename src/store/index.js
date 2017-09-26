import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	cityId: '292',  //当前城市id 默认上海292
	cityName: '上海' //当前城市 默认上海
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})