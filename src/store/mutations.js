import {
	CHOOSE_CITY
} from './mutation-types.js'

export default {
	[CHOOSE_CITY](state, {
		id,
		name
	}) {
		state.cityId = id;
		state.cityName = name;
	}
}