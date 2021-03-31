import types from '../actions/types';
import { createReducer } from '../utils/redux';

const initialState = {
  loading: false,
  error: undefined,
  content: undefined
}

export default createReducer(initialState, {
  [types.FETCH_TOP_BLOG_REQUEST]: (state, action) => {
    return { ...state, loading: true, error: undefined }
  },
  [types.FETCH_TOP_BLOG_FAILURE]: (state, action) => {
    return { ...state, loading: false, error: action.error }
  },
  [types.FETCH_TOP_BLOG_SUCCESS]: (state, action) => {
    return { ...state, loading: false, content: action.payload };
  }
});
