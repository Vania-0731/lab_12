import "./App.css";
import "./Style/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import SeriePage from "./pages/SeriePage";
import SerieFormPage from "./pages/SerieFormPage";
import { SerieProvider } from "./context/SerieContext";
import { CategoryProvider } from "./context/CategoryContext";
import CategoryFormPage from "./pages/CategoryFormPage";

function App() {
    return (
        <BrowserRouter>
            <SerieProvider>
                <CategoryProvider>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/categories" element={<CategoryPage />} />
                        <Route path="/series" element={<SeriePage />} />
                        <Route path="/series/create" element={<SerieFormPage />} />
                        <Route path="/series/edit/:idserie" element={<SerieFormPage />} />
						<Route path="/categories/edit/:id" element={<CategoryFormPage />} />
                    </Routes>
                </CategoryProvider>
            </SerieProvider>
        </BrowserRouter>
    );
}

export default App;
