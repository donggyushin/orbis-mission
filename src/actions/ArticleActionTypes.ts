export const FETCHING_ARTICLE_SUCCESS = "FETCHING_ARTICLE_SUCCESS";
export const FETCHING_ARTICLE_FAIL = "FETCHING_ARTICLE_FAIL";
export const ARTICLE_LOADING = "ARTICLE_LOADING";

export interface LEGACY {
  xlarge: string;
  xlargewidth: number;
  xlargeheight: number;
}

export interface MULTIMEDIA {
  rank: number;
  subtype: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: LEGACY;
  subType: "xlarge";
  crop_name: "articleLarge";
}

export interface HEADLINE {
  main: string;
  print_headline: string;
}

export interface KEYWORD {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface ARTICLE {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section: string;
  print_page: string;
  source: string;
  multimedia: MULTIMEDIA[];
  headline: HEADLINE;
  keywords: KEYWORD[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name: string;
  _id: string;
}

export interface FetchingArticleSuccess {
  type: typeof FETCHING_ARTICLE_SUCCESS;
  payload: ARTICLE[];
}

export interface FetchingArticleFail {
  type: typeof FETCHING_ARTICLE_FAIL;
}

export interface ArticleLoading {
  type: typeof ARTICLE_LOADING;
}

export type ARTICLE_DISPATCH_TYPE =
  | FetchingArticleSuccess
  | FetchingArticleFail
  | ArticleLoading;
