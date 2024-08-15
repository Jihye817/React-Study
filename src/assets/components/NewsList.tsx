import { css } from "@emotion/react";
import NewsItem from "./NewsItem";

const newsListContainer = css`
  width: 100%;
`

const NewsList = (props: {
  news: {
    status: string;
    totalResults: number;
    articles: {
      source: { id: string; name: string };
      author: string;
      title: string;
      description: null;
      url: string;
      urlToImage: null;
      publishedAt: string;
      content: null;
    }[];
  };
}) => {
  return (
    <>
      <div css={newsListContainer}>
        {props.news.totalResults !== 0 &&
          props.news.articles.map((item) => <NewsItem articles={item} />)}
      </div>
    </>
  );
};

export default NewsList;
