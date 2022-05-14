import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMemoPage from "./pages/CreateMemoPage";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateMemoPage />} />
      <Route path="/createMemo" element={<CreateMemoPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
