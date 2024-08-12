import { ThemeProvider } from "@emotion/react";
import TodoHeader from "../components/TodoHeader";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { createTheme } from "@mui/material";
import { useRef, useState } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "공부 내용 정리하기",
    createdDate: new Date().getTime(),
  },
];

const TodoListPage = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1a82e4",
      },
    },
  });
  const idRef = useRef(2);
  const [todo, setTodo] = useState(mockData);

  const onCreate = (content: string) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };

    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onDelete = (targetId: number) => {
    setTodo(todo.filter((item) => item.id !== targetId));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="todo_container">
        <TodoHeader />
        <TodoInput onCreate={onCreate} />
        <TodoList todo={todo} onDelete={onDelete} />
      </div>
    </ThemeProvider>
  );
};

export default TodoListPage;
