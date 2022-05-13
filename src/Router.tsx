import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Hoc from "./pages/hoc";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SideMaster from "./pages/SideMaster";

export default function Routers() {
  {/* 所有的路由配置均在 BrowserRouter 内部 */ }
  {/* 使用 Routes 替换曾经的 Switch */ }
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/hoc" element={<Hoc />} />
      <Route path="/index" element={<Index />} />
      <Route path="/sideMaster" element={<SideMaster />} />
      <Route path="/error" element={<Navigate to="/" />}></Route>
      <Route path="*" element={<NotFound />} ></Route>
    </Routes>
  );
}