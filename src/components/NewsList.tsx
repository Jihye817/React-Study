import { css } from "@emotion/react";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../libs/usePromise";

const newsListContainer = css`
  width: 100%;
`;

interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: null;
  url: string;
  urlToImage: null;
  publishedAt: string;
  content: null;
}

const NewsList = (props: { category: string }) => {
  const [loading, response, error] = usePromise(() => {
    const query = props.category === "all" ? "" : `&category=${props.category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=dcf6364c4e4448f8b370abfa27daa82e`
    );
  }, [props.category]);

  if (loading) {
    return <div>대기 중...</div>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <div>에러 발생!</div>;
  }
  const { articles } = response.data;
  return (
    <>
      <div css={newsListContainer}>
        {articles.map((item: Article) => (
          <NewsItem articles={item} key={item.url} />
        ))}
      </div>
    </>
  );
};

export default NewsList;
