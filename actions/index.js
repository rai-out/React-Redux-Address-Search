import axios from 'axios';
export const PERFORMED_SEARCH = 'address-search-starter/SEARCH';
export const RECEIVED_RESULTS = 'address-search-starter/RESULTS';

export const performedSearch = (query, dispatch) => {
  axios.get('http://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      address: query
    }
  }).then(res =>

    dispatch(receivedResults(res.data.results))

    // res.data.results.map(result =>
    //   console.log(result.formatted_address)
    // )
  )

  return({
    type: PERFORMED_SEARCH,
    query
  })
};

export const receivedResults = (results) => {
  return({
    type: RECEIVED_RESULTS,
    results
  })
};










// axios.get('http://maps.googleapis.com/maps/api/geocode/json?', {
//   params: {
//     address: query
//   }
// }).then(res => res.data.results.map(result => console.log(result.formatted_address)))

// }).then(res => {
//   return res.data.results.map(result => {
//     return console.log(result.formatted_address)
//   })
// });
