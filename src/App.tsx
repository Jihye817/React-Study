import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoListPage from "./pages/TodoListPage";
import FrontPage from "./pages/FrontPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/todo" element={<TodoListPage />} />
      <Route path="/news/:category?" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
