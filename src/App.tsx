import "./App.css";

import React, { useEffect, useState } from "react";

import Articles from "./pages/articles/Articles";
import { NAVIGATION_STRING_TYPE } from "./types/Types";
import Navigation from "./components/navigation/Navigation";
import Starred from "./pages/starred/Starred";
import { fetchingStarredArticles } from "./actions/StarredArticleActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState<NAVIGATION_STRING_TYPE>("articles");
  const handleChange = (
    _: React.ChangeEvent<{}>,
    value: NAVIGATION_STRING_TYPE
  ) => {
    setTabValue(value);
  };

  useEffect(() => {
    callFetchingStarredArticles();
  }, []);

  const callFetchingStarredArticles = () => {
    dispatch(fetchingStarredArticles());
  };

  return (
    <div className="app">
      <Navigation tabValue={tabValue} handleChange={handleChange} />
      <div className="app__container">
        {tabValue === "articles" ? <Articles /> : <Starred />}
      </div>
    </div>
  );
}

export default App;
