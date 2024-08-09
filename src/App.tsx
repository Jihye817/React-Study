import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoListPage from "./assets/pages/TodoListPage";
import FrontPage from "./assets/pages/FrontPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/todo" element={<TodoListPage />} />
    </Routes>
  );
}

export default App;
