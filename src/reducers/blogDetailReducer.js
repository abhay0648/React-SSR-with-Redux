import types from '../actions/types';
import { createReducer } from '../utils/redux';

const initialState = {
  loading: false,
  error: undefined,
  content: undefined
}


export default createReducer(initialState, {
  [types.FETCH_BLOG_DETAIL_REQUEST]: (state, action) => {
    return { ...state, loading: true, error: undefined }
  },
  [types.FETCH_BLOG_DETAIL_FAILURE]: (state, action) => {
    return { ...state, loading: false, error: action.error }
  },
  [types.FETCH_BLOG_DETAIL_SUCCESS]: (state, action) => {
    console.log('Fetch Detail Succ' +  action.payload.title);
    return { ...state, loading: false, content: action.payload };
  }
});
