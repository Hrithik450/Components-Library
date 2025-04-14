import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import NotFound from "../pages/notFound.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
