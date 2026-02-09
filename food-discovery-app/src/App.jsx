import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";
import Favourites from "./features/Favourites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="meal-detail" element={<MealDetail />} />
        <Route path="favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
