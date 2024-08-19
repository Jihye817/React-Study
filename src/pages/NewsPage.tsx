import NewsHeader from "../components/NewsHeader";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const params = useParams();

  return (
    <>
      <NewsHeader />
      <NewsList category={params.category!} />
    </>
  );
};

export default NewsPage;
