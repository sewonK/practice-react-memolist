import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMemoPage from "./pages/CreateMemoPage";
import MemoListPage from "./pages/MemoListPage";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateMemoPage />} />
      <Route path="/createMemo" element={<CreateMemoPage />} />
      <Route path="/memoList" element={<MemoListPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
