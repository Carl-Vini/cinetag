import Container from "components/Container";
import Rodape from "components/Rodape";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return(
        <BrowserRouter>
        <Container >
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Favoritos" element={<Favoritos /> }/>
        </Routes>
        </Container>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes; 