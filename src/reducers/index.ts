import ArticleReducer from './ArticleReducer'
import StarredArticleReducer from './StarredArticleReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ ArticleReducer, StarredArticleReducer })

export default rootReducer