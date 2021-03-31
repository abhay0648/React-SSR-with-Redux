import types from './types';

// Action Creators
const request = () => ({ type: types.FETCH_INDUSTRY_REQUEST });
const success = payload => ({ type: types.FETCH_INDUSTRY_SUCCESS, payload });
const failure = error => ({ type: types.FETCH_INDUSTRY_FAILURE, error });

export const fetchIndustry = () => async dispatch => {
  dispatch(request());

  try {
    const response = await fetch('http://localhost:3000/assets/api/industry.json');
    const payload = await response.json();
    dispatch(success(payload.results));
  } catch (error) {
    dispatch(failure(error));
    throw error;
  }
};
