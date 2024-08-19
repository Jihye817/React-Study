import { css } from "@emotion/react";

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
      color: #1a9b70;
      border-bottom: 2px solid #1a9b70;
    }
`;

const NewsHeader = (props: {
  category: string;
  onSelect: (category: string) => void;
}) => {
  return (
    <div css={newsCategoryBlock}>
      {categories.map((c) => (
        <div
          key={c.name}
          className={props.category === c.name ? "active" : "" }
          onClick={() => props.onSelect(c.name)}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
};

export default NewsHeader;
