import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg"

const FrontPage = () => {
  const nav = useNavigate();

  const todo = () => {
    nav("/todo");
  };

  const news = () => {
    nav("/news/all");
  };

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="title_text">리액트 공부 정리</div>
      <Button variant="contained" disableElevation onClick={todo}>
        📅 Todo 어플 제작
      </Button>
      <Button variant="contained" disableElevation onClick={news}>
        📰 뉴스 뷰어 제작
      </Button>
    </>
  );
};

export default FrontPage;
