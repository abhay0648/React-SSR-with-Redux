import types from './types';

// Action Creators
const request = () => ({ type: types.FETCH_TOP_BLOG_REQUEST });
const success = payload => ({ type: types.FETCH_TOP_BLOG_SUCCESS, payload });
const failure = error => ({ type: types.FETCH_TOP_BLOG_FAILURE, error });

export const fetchTopBlog = () => async dispatch => {
  dispatch(request());

  try {
    const response = await fetch('http://localhost:3000/assets/api/top_blog.json');
    const payload = await response.json();
    dispatch(success(payload.results));
  } catch (error) {
    dispatch(failure(error));
    throw error;
  }
};
