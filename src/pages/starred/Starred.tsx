import "./style.scss";

import Article from "../../components/article/Article";
import React from "react";
import { RootState } from "../../Store";
import { useSelector } from "react-redux";

const Starred = () => {
  const articleReducer = useSelector(
    (state: RootState) => state.StarredArticleReducer
  );

  const goToReadArticle = (url: string) => {
    window.open(url);
  };
  return (
    <div className="starred__container">
      <div style={{ marginTop: 50 }} className="articles">
        {articleReducer.articles.map((article, index) => (
          <Article
            key={index}
            goToReadArticle={goToReadArticle}
            article={article}
          />
        ))}
      </div>
    </div>
  );
};

export default Starred;
