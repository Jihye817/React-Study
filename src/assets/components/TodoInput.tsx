import { Button } from "@mui/material";
import { useRef, useState } from "react";

const TodoInput = (props: { onCreate: (content: string) => void }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content && inputRef.current) {
      inputRef.current.focus();
      return;
    }
    props.onCreate(content);
    setContent("");
  };

  return (
    <div className="todo_input_container">
      <h4>오늘 할 일 만들기 ✏️</h4>
      <div className="todo_input_wrap">
        <input
          ref={inputRef}
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
