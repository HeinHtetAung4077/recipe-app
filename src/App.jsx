import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
