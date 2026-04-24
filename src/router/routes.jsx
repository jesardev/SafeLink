import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MapPage from "../pages/MapPage";
import MapPage2 from "../pages/MapPage2";

export function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/mapa" element={<MapPage />} />
                <Route path="/mapa2" element={<MapPage2 />} />
            </Routes>
        </Router>
    );
}
