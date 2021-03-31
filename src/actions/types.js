const generateTypes = (names) => {
  const actionTypes = {}
  Object.keys(names).forEach(name => {
    actionTypes[name] = name
  })
  return actionTypes
}

export default generateTypes({

  FETCH_GENERAL_REQUEST: null,
  FETCH_GENERAL_SUCCESS: null,
  FETCH_GENERAL_FAILURE: null,

  FETCH_BESPOKE_REQUEST: null,
  FETCH_BESPOKE_SUCCESS: null,
  FETCH_BESPOKE_FAILURE: null,

  FETCH_INDUSTRY_REQUEST: null,
  FETCH_INDUSTRY_SUCCESS: null,
  FETCH_INDUSTRY_FAILURE: null,

  FETCH_TOP_BLOG_REQUEST: null,
  FETCH_TOP_BLOG_SUCCESS: null,
  FETCH_TOP_BLOG_FAILURE: null,

  FETCH_BLOG_DETAIL_REQUEST: null,
  FETCH_BLOG_DETAIL_FAILURE: null,
  FETCH_BLOG_DETAIL_SUCCESS: null,

  FETCH_COMMENT_REQUEST: null,
  FETCH_COMMENT_SUCCESS: null,
  FETCH_COMMENT_FAILURE: null,


});
