import { ARTICLE } from "./ArticleActionTypes";

export const FETCHING_STARRED_ARTICLES = "FETCHING_STARRED_ARTICLES";
export const ADD_STARRED_ARTICLE = "ADD_STARRED_ARTICLE";
export const REMOVE_STARRED_ARTICLE = "REMOVE_STARRED_ARTICLE";

export interface FetchingStarredArticles {
  type: typeof FETCHING_STARRED_ARTICLES;
  payload: ARTICLE[];
}

export interface AddStarredArticle {
  type: typeof ADD_STARRED_ARTICLE;
  payload: ARTICLE[];
}

export interface RemoveStarredArticle {
  type: typeof REMOVE_STARRED_ARTICLE;
  payload: ARTICLE[];
}

export type STARRED_ARTICLES_DISPATCH_TYPE =
  | FetchingStarredArticles
  | AddStarredArticle
  | RemoveStarredArticle;
