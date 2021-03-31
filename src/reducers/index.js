import { combineReducers } from 'redux'

import general from './general'
import bespokeReducer from './bespokeReducer'
import industryReducer from './industryReducer'
import topBlogReducer from './topBlogReducer'
import blogDetailReducer from './blogDetailReducer'
import newsComment from './newsComment'

export default combineReducers({
  general,
  topBlogReducer,
  industryReducer,
  bespokeReducer,
  blogDetailReducer,
  newsComment
});
