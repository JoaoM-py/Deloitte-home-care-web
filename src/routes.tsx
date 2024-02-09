import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Init from "./pages/init";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Init />} />
    </Routes>
  );
}