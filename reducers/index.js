// Reducer function goes here
import { PERFORMED_SEARCH, RECEIVED_RESULTS } from '../actions'

const initialState = {
	searchQuery: '',
	results: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case PERFORMED_SEARCH:
			return {
				...state,
				searchQuery: action.query
			};
		case RECEIVED_RESULTS:
			return {
				...state,
				results: action.results
			};
		default:
			return state;
	}
}
