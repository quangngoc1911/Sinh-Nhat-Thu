import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import PageHome from "./PageHome";
import SinhNhat from "./SinhNhat";
import DongThoiGian from "./DongThoiGian";
import HinhAnh from "./HinhAnh";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageHome />}>
          <Route path="/" element={<Navigate to="sinhnhat" />} />
          <Route path="sinhnhat" element={<SinhNhat />} />
          <Route path="dongthoigian" element={<DongThoiGian />} />
          <Route path="anhembe" element={<HinhAnh />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
