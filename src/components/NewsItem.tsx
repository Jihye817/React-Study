import { css } from "@emotion/react";

const newsItemBlock = css`
  display: flex;
  margin: 10px 0px;
  .thumbnail {
    img {
      width: 160px;
      height: 100px;
      margin-right: 1rem;
    }
  }
  .noThumb {
    width: 160px;
    height: 100px;
    margin-right: 1rem;
    background-color: grey;
  }
`;

const NewsItem = (props: {
  articles: {
    source: { id: string; name: string };
    author: string;
    title: string;
    description: null;
    url: string;
    urlToImage: null;

    publishedAt: string;
    content: null;
  };
}) => {
  return (
    <div css={newsItemBlock}>
      {props.articles.urlToImage !== null ? (
        <div className="thumbnail">
          <img src={props.articles.urlToImage} alt="thumbnail" />
        </div>
      ) : (
        <div>
          <div className="noThumb"></div>
        </div>
      )}
      <div>
        <h2>{props.articles.title}</h2>
        <a>{props.articles.description}</a>
      </div>
    </div>
  );
};

export default NewsItem;
