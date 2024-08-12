import { Button } from "@mui/material";
import { useState } from "react";

const TodoInput = (props: { onCreate: (content: string) => void }) => {
  const [content, setContent] = useState("");

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    props.onCreate(content);
  };

  return (
    <div className="todo_input_container">
      <h4>오늘 할 일 만들기 ✏️</h4>
      <div className="todo_input_wrap">
        <input
          placeholder="todo..."
          value={content}
          onChange={onChangeContent}
        />
        <Button variant="contained" disableElevation onClick={onSubmit}>
          추가
        </Button>
      </div>
    </div>
  );
};

export default TodoInput;
