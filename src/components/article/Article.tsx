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

  const returnStringin30 = (text: string): string => {
    let count = 0;
    let returnText = "";

    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (character !== " ") {
        count += 1;
      }
      returnText = returnText + character;
      if (count >= 30) break;
    }
    return returnText;
  };

  return (
    <div className="article">
      <div className="left" onClick={() => goToReadArticle(article.web_url)}>
        <p className="title">{article.headline.main}</p>
        <p className="lead__paragraph">
          {article.abstract.replace(/ /g, "").length > 30
            ? returnStringin30(article.abstract) + " ...more"
            : article.abstract}
        </p>
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
