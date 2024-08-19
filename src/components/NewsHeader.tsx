import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const newsCategoryBlock = css`
  display: flex;
  div {
    margin: 0px 20px;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    :hover {
      color: #1a9b70;
    }
  }
  .active {
    text-decoration: none;
    color: #1a9b70;
    border-bottom: 2px solid #1a9b70;
  }
  .nav_style {
    text-decoration: none;
    color: black;
  }
`;

const NewsHeader = () => {
  return (
    <div css={newsCategoryBlock}>
      {categories.map((c) => (
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "nav_style")}
          to={c.name === "all" ? "/news/all" : `/news/${c.name}`}
          key={c.name}
        >
          <div key={c.name}>{c.text}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default NewsHeader;
