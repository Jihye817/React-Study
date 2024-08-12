import { ThemeProvider } from "@emotion/react";
import TodoHeader from "../components/TodoHeader";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { createTheme } from "@mui/material";

const TodoListPage = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1a82e4",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="todo_container">
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </div>
    </ThemeProvider>
  );
};

export default TodoListPage;
