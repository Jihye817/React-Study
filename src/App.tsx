import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoListPage from "./assets/pages/TodoListPage";
import FrontPage from "./assets/pages/FrontPage";
import NewsPage from "./assets/pages/NewsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/todo" element={<TodoListPage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
