import Banner from "components/Banner";
import styles from "./player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from "json/db.json"
import NaoEncontrada from "pages/NaoEncontrada";

function Player() {

    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id)
    })
    console.log(video)

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className="styles.container">
                <iframe
                    width="100%"
                    height="600"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </section>

        </>
    )
}

export default Player;