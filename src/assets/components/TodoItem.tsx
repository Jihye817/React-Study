import { Button, Checkbox } from "@mui/material";
import "../styles/TodoListPage.css";

const TodoItem = () => {
  return (
    <div className="todo_item_wrap">
      <Checkbox />
      <div>todo item</div>
      <div>
        {new Date().toLocaleDateString()}
      </div>
      <Button variant="contained" disableElevation className="btn_grey">삭제</Button>
    </div>
  );
};

export default TodoItem;
