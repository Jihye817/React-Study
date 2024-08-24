import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoListPage from "./pages/TodoListPage";
import FrontPage from "./pages/FrontPage";
import NewsPage from "./pages/NewsPage";
import ColorPage from "./pages/ColorPage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/todo" element={<TodoListPage />} />
      <Route path="/news/:category?" element={<NewsPage />} />
      <Route path="/color" element={<ColorPage />} />
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
  );
}

export default App;
