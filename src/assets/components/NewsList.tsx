import NewsItem from "./NewsItem";

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
      <div>
        {props.news.totalResults !== 0 &&
          props.news.articles.map((item) => <NewsItem />)}
      </div>
    </>
  );
};

export default NewsList;
