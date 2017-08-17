
import React, { PropTypes, Component } from 'react'

const AddressFinder = ({ searchQuery, onSearch, results }) => {
	return (
		<div>
			<h1>
				Search: enter location
			</h1>
			<div>
				<input type='text' onChange={onSearch} value={searchQuery} />
			</div>
			<div>
				<ul>
					{results.map(
						(result, index) => <li key={index}> {result.formatted_address} </li>
					)}
				</ul>
			</div>
		</div>
			)
}



export default AddressFinder;
