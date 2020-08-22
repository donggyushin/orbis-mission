import "./style.scss"

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Article from "../../components/article/Article"
import { Button } from '@material-ui/core'
import { RootState } from "../../Store"
import { fetchingArticle } from '../../actions/ArticleActions'

const Articles = () => {
  const dispatch = useDispatch()
  const articleReducer = useSelector((state: RootState) => state.ArticleReducer)

  const [query, setQuery] = useState("")

  const handleQuery = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const callFetchingArticles = () => {
    dispatch(fetchingArticle(query))
  }

  const enterKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      callFetchingArticles()
    }
  }

  const goToReadArticle = (url: string) => {
    window.open(url)
  }


  return <div className={"articles__container"}>
    <div style={{ marginTop: 50 }} className="row">
      <input onKeyUp={enterKeyPressed} className="textfield" value={query} placeholder="Search..." onChange={handleQuery} />
      <Button onClick={callFetchingArticles} variant="contained" color="primary">
        Search
</Button>
    </div>
    <div className="articles">
      {articleReducer.loading && 'Loading...'}
      {articleReducer.articles.map((article, index) => <Article key={index} goToReadArticle={goToReadArticle} article={article} />)}
    </div>
  </div>
}

export default Articles