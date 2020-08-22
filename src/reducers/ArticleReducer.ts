import { ARTICLE, ARTICLE_DISPATCH_TYPE, ARTICLE_LOADING, FETCHING_ARTICLE_FAIL, FETCHING_ARTICLE_SUCCESS } from "../actions/ArticleActionTypes"

interface InitialState {
  articles: ARTICLE[]
  loading: boolean
}

const intiailState: InitialState = {
  articles: [],
  loading: false
}

export const ArticleReducer = (state = intiailState, action: ARTICLE_DISPATCH_TYPE): InitialState => {
  switch (action.type) {
    case FETCHING_ARTICLE_SUCCESS:
      return fetchingArticleSuccess(state, action)
    case FETCHING_ARTICLE_FAIL:
      return fetchingArticleFail(state, action)
    case ARTICLE_LOADING:
      return loading(state, action)
    default:
      return state
  }
}

const loading = (state: InitialState, action: ARTICLE_DISPATCH_TYPE): InitialState => {
  if (action.type !== ARTICLE_LOADING) return state
  return {
    ...state,
    loading: true
  }
}

const fetchingArticleFail = (state: InitialState, _: ARTICLE_DISPATCH_TYPE): InitialState => {
  return { ...state, loading: false }
}

const fetchingArticleSuccess = (state: InitialState, action: ARTICLE_DISPATCH_TYPE): InitialState => {
  if (action.type !== FETCHING_ARTICLE_SUCCESS) return state
  const articles = action.payload
  return {
    ...state,
    articles,
    loading: false
  }
}

export default ArticleReducer