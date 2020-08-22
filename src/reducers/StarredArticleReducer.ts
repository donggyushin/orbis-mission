import {
  ADD_STARRED_ARTICLE,
  FETCHING_STARRED_ARTICLES,
  REMOVE_STARRED_ARTICLE,
  STARRED_ARTICLES_DISPATCH_TYPE,
} from "../actions/StarredArticleActionTypes";

import { ARTICLE } from "../actions/ArticleActionTypes";

interface InitialState {
  articles: ARTICLE[];
}

const initialState: InitialState = {
  articles: [],
};

const StarredArticleReducer = (
  state = initialState,
  action: STARRED_ARTICLES_DISPATCH_TYPE
): InitialState => {
  switch (action.type) {
    case FETCHING_STARRED_ARTICLES:
      return fetchingStarredArticles(state, action);
    case ADD_STARRED_ARTICLE:
      return addStarredArticle(state, action);
    case REMOVE_STARRED_ARTICLE:
      return removeStarredArticle(state, action);
    default:
      return state;
  }
};

const removeStarredArticle = (
  state: InitialState,
  action: STARRED_ARTICLES_DISPATCH_TYPE
): InitialState => {
  if (action.type !== REMOVE_STARRED_ARTICLE) return state;
  return {
    ...state,
    articles: action.payload,
  };
};

const addStarredArticle = (
  state: InitialState,
  action: STARRED_ARTICLES_DISPATCH_TYPE
): InitialState => {
  if (action.type !== ADD_STARRED_ARTICLE) return state;
  const articles = action.payload;
  return {
    ...state,
    articles,
  };
};

const fetchingStarredArticles = (
  state: InitialState,
  action: STARRED_ARTICLES_DISPATCH_TYPE
): InitialState => {
  if (action.type !== FETCHING_STARRED_ARTICLES) return state;
  const articles = action.payload;
  return {
    ...state,
    articles,
  };
};

export default StarredArticleReducer;
