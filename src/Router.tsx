import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Hoc from "./pages/hoc";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SideMaster from "./pages/SideMaster";
import LifeCycle from "./pages/lifeCycle";
import Hook from "./pages/hook";
import Hook2 from "./pages/hook2";
import Hook3 from "./pages/hook3";
import StatePattern from "./pages/statePattern";
import Fusion from "./pages/fusion";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/hoc" element={<Hoc />} />
      <Route path="/index" element={<Index />} />
      <Route path="/sideMaster" element={<SideMaster />} />
      <Route path="/lifeCycle" element={<LifeCycle />} />
      <Route path="/hook" element={<Hook />} />
      <Route path="/hook2" element={<Hook2 />} />
      <Route path="/hook3" element={<Hook3 />} />
      <Route path="/statePattern" element={<StatePattern />} />
      <Route path="/fusion" element={<Fusion />} />


      <Route path="/error" element={<Navigate to="/" />}></Route>
      <Route path="*" element={<NotFound />} ></Route>
    </Routes>
  );
}