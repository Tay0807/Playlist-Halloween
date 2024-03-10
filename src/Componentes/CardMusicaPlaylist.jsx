import css from "./Lista.module.css";
import CardMusica from "./CardMusica";

function CardMusicaPlaylist(props){
    return(
        <div>
            <div className={css.FUNDO}>

                <div className={css.container} >
                    {/*For que percorre os objetos e cria a lista*/}
                    {props.Playlist.map((item, index) =>
                        item !== false && <CardMusica add={false} imagem = {item.Img} setMusicas2={props.setMusicas} Musicas2={props.Musicas} setPlaylist={props.setPlaylist} Playlist={props.Playlist} nome = {item.Nome} cantor = {item.Cantora} item = {item} ></CardMusica>
                    )}
                </div>

            </div>
        </div>
    )
}

export default CardMusicaPlaylist