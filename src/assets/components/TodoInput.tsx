import { Button } from "@mui/material";

const TodoInput = () => {
  return (
    <div>
      <div>오늘 할 일 만들기 ✏️</div>
      <div>
        <input />
        <Button variant="contained" disableElevation>
          추가
        </Button>
      </div>
    </div>
  );
};

export default TodoInput;
