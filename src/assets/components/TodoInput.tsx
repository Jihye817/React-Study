import { Button } from "@mui/material";

const TodoInput = () => {
  return (
    <div className="todo_input_container">
      <h4>오늘 할 일 만들기 ✏️</h4>
      <div className="todo_input_wrap">
        <input placeholder="todo..."/>
        <Button variant="contained" disableElevation>
          추가
        </Button>
      </div>
    </div>
  );
};

export default TodoInput;
