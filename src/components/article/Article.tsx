import "./style.scss";

import React, { useEffect, useState } from "react";
import {
  addStarredArticle,
  removeStarredArticle,
} from "../../actions/StarredArticleActions";
import { useDispatch, useSelector } from "react-redux";

import { ARTICLE } from "../../actions/ArticleActionTypes";
import { NYTIMES_ENDPOINT } from "../../constants/Contants";
import { RootState } from "../../Store";

interface Props {
  article: ARTICLE;
  goToReadArticle: (url: string) => void;
}

const Article: React.FunctionComponent<Props> = ({
  article,
  goToReadArticle,
}) => {
  const starredArticleReducer = useSelector(
    (state: RootState) => state.StarredArticleReducer
  );
  const dispatch = useDispatch();

  const [starred, setStarred] = useState(false);

  useEffect(() => {
    checkStarred();
  });

  const toggleStarred = () => {
    setStarred(!starred);
    if (starred) {
      dispatch(removeStarredArticle(article));
    } else {
      dispatch(addStarredArticle(article));
    }
  };

  const checkStarred = () => {
    starredArticleReducer.articles.map((starredArticle) => {
      if (starredArticle._id === article._id) {
        setStarred(true);
      }
    });
  };

  return (
    <div className="article">
      <div className="left" onClick={() => goToReadArticle(article.web_url)}>
        <p className="title">{article.headline.print_headline}</p>
        <p className="lead__paragraph">{article.lead_paragraph}</p>
      </div>
      <div className="right">
        {starred ? (
          <img
            src={require("../../assets/star.png")}
            alt=""
            className="star"
            onClick={toggleStarred}
          />
        ) : (
          <img
            src={require("../../assets/emptyStar.png")}
            alt=""
            className="star"
            onClick={toggleStarred}
          />
        )}
        {article.multimedia.length >= 1 && (
          <img
            onClick={() => goToReadArticle(article.web_url)}
            src={`${NYTIMES_ENDPOINT}${article.multimedia[0].url}`}
            alt={article.multimedia[0].type}
          />
        )}
      </div>
    </div>
  );
};

export default Article;
