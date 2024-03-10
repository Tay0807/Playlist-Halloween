import {useState} from "react";
import css from './Lista.module.css'
import CardMusica from "./CardMusica";

function Lista(props){

    return(
        <div className={css.FUNDO}>

            <div className={css.container} >
                {/*For que percorre os objetos e cria a lista*/}
                {props.Musicas.map((item, index) =>
                    item !== false && <CardMusica add={true} imagem = {item.Img} setMusicas2={props.setMusicas}  Playlist={props.Playlist} setPlaylist={props.setPlaylist} Musicas2={props.Musicas} nome = {item.Nome} cantor = {item.Cantora} item = {item} ></CardMusica>
                )}
            </div>

        </div>
    )
}

export default Lista