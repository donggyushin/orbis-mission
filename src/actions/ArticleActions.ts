import { ARTICLE, ARTICLE_DISPATCH_TYPE, ARTICLE_LOADING, FETCHING_ARTICLE_FAIL, FETCHING_ARTICLE_SUCCESS } from './ArticleActionTypes'

import { Dispatch } from 'redux'
import axios from 'axios'

export const fetchingArticle = (query: string) => async (dispatch: Dispatch<ARTICLE_DISPATCH_TYPE>) => {
 dispatch({
  type: ARTICLE_LOADING
 })
 if (!query) return
 try {
  const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu`)
  const data = response.data
  console.log("data: ", data)
  const articles = data.response.docs as ARTICLE[]
  return dispatch({
   type: FETCHING_ARTICLE_SUCCESS,
   payload: articles
  })
 } catch (err) {
  alert(err.message)
  return dispatch({
   type: FETCHING_ARTICLE_FAIL
  })
 }
}