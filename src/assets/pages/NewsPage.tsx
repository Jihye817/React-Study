import { useCallback, useEffect, useState } from "react";
import NewsHeader from "../components/NewsHeader";
import NewsList from "../components/NewsList";
import axios from "axios";

const NewsPage = () => {
  const [data, setData] = useState({
    status: "",
    totalResults: 0,
    articles: [
      {
        source: {
          id: "",
          name: "",
        },
        author: "",
        title: "",
        description: null,
        url: "",
        urlToImage: null,
        publishedAt: "",
        content: null,
      },
    ],
  });
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");

  const onSelect = useCallback((category: string) => setCategory(category), []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=dcf6364c4e4448f8b370abfa27daa82e`
        );
        setData(response.data);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <div>대기 중...</div>;
  }

  if (!articles) {
    return null;
  }

  return (
    <>
      <NewsHeader category={category} onSelect={onSelect} />
      <NewsList news={data}/>
    </>
  );
};

export default NewsPage;
