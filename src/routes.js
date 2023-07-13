import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />} />
        </Routes>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes; 