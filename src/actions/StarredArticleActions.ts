import {
  ADD_STARRED_ARTICLE,
  FETCHING_STARRED_ARTICLES,
  REMOVE_STARRED_ARTICLE,
  STARRED_ARTICLES_DISPATCH_TYPE,
} from "./StarredArticleActionTypes";

import { ARTICLE } from "./ArticleActionTypes";
import { Dispatch } from "redux";
import { RootState } from "../Store";
import { STARRED_ARTICLES_LOCALSTORAGE } from "../constants/Contants";

export const removeStarredArticle = (articleToDelete: ARTICLE) => (
  dispatch: Dispatch<STARRED_ARTICLES_DISPATCH_TYPE>,
  getState: () => RootState
) => {
  const starredArticles = getState().StarredArticleReducer.articles;
  const updatedArticles = starredArticles.filter(
    (article) => article._id !== articleToDelete._id
  );

  dispatch({
    type: REMOVE_STARRED_ARTICLE,
    payload: updatedArticles,
  });
  localStorage.setItem(
    STARRED_ARTICLES_LOCALSTORAGE,
    JSON.stringify(updatedArticles)
  );
};

export const addStarredArticle = (newArticle: ARTICLE) => (
  dispatch: Dispatch<STARRED_ARTICLES_DISPATCH_TYPE>,
  getState: () => RootState
) => {
  const starredArticles = getState().StarredArticleReducer.articles;
  starredArticles.unshift(newArticle);

  dispatch({
    type: ADD_STARRED_ARTICLE,
    payload: starredArticles,
  });
  localStorage.setItem(
    STARRED_ARTICLES_LOCALSTORAGE,
    JSON.stringify(starredArticles)
  );
};

export const fetchingStarredArticles = () => (
  dispatch: Dispatch<STARRED_ARTICLES_DISPATCH_TYPE>
) => {
  const starredArticlesString = localStorage.getItem(
    STARRED_ARTICLES_LOCALSTORAGE
  );
  if (!starredArticlesString) return;
  const starredArticles = JSON.parse(starredArticlesString) as ARTICLE[];
  dispatch({
    type: FETCHING_STARRED_ARTICLES,
    payload: starredArticles,
  });
};
