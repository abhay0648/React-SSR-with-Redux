import types from './types';

// Action Creators
const request = () => ({ type: types.FETCH_BLOG_DETAIL_REQUEST });
const success = payload => ({ type: types.FETCH_BLOG_DETAIL_SUCCESS, payload });
const failure = error => ({ type: types.FETCH_BLOG_DETAIL_FAILURE, error });

export const fetchBlog = () => async dispatch => {
  dispatch(request());

  try {
    const response = await fetch('http://localhost:3000/assets/api/blog_detail.json');
    const payload = await response.json();
    dispatch(success(payload.results));
  } catch (error) {
    dispatch(failure(error));
    throw error;
  }
};
