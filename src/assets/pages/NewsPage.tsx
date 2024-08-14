import { useState } from "react";
import NewsHeader from "../components/NewsHeader";
import NewsList from "../components/NewsList";
import axios from "axios";
import { Button } from "@mui/material";

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
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=dcf6364c4e4448f8b370abfa27daa82e"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <NewsHeader />
      <NewsList news={data} />
      <div>
        <Button variant="contained" disableElevation onClick={onClick}>
          불러오기
        </Button>
      </div>
      <div>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </div>
    </>
  );
};

export default NewsPage;
