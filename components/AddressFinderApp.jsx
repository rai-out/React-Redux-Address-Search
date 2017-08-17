import { connect } from 'react-redux'
import { performedSearch } from '../actions'
import AddressFinder from './AddressFinder'

export default connect(
	(state)    => ({searchQuery: state.searchQuery, results: state.results}),
	(dispatch) => ({
		onSearch: (event) => dispatch(performedSearch(event.target.value, dispatch))
	})
)(AddressFinder)
