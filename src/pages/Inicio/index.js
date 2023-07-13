import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Titulo from "components/Titulo";

function Inicio () {
    return ( 
        <>
        
    <Cabecalho />
    <Banner imagem="home"/>
    <Titulo>
        <h1>Um lugar para guardar seus filmes e vídeos !</h1>
    </Titulo>
    </>
    )
}

export default Inicio;