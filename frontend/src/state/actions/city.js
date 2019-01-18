import apiCall from './helpers/apiCall'

const setCities = cities => {
  return {
    type: 'SET_CITIES',
    cities
  }
}

export const fetchCities = () => {
  console.log('hit!')
  return dispatch => {
    return apiCall("GET", '/cities').then(res => {
      if (!res.error) {
        dispatch(setCities(res));
      }
    });
  };
};