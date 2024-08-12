import { Button, Checkbox } from "@mui/material";
import "../styles/TodoListPage.css";

const TodoItem = (props: {
  id: number;
  isDone: boolean;
  content: string;
  createdDate: number;
  onDelete: (targetId: number) => void;
}) => {
  const onClickDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="todo_item_wrap">
      <Checkbox />
      <div>{props.content}</div>
      <div>{new Date(props.createdDate).toLocaleDateString()}</div>
      <Button
        variant="contained"
        disableElevation
        className="btn_grey"
        onClick={onClickDelete}
      >
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
