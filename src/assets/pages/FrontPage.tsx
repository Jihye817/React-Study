import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import reactLogo from "../react.svg";

const FrontPage = () => {
  const nav = useNavigate();

  const todo = () => {
    nav("/todo");
  };
  
  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="title_text">리액트 공부 정리</div>
      <Button
        variant="contained"
        disableElevation
        onClick={todo}
      >
        📅 Todo 어플 제작
      </Button>
    </>
  );
};

export default FrontPage;
