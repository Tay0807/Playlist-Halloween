import Lista from "./Lista";
import css from "./CardMusica.module.css"

function CardMusica(props){

    function SoltarMusica(item){
        if (item.play === false) {
            item.video.play()
            item.play = true
        } else {
            item.video.pause()
            item.video.currentTime = 0
            item.play = false
        }

        props.setPlaylist([...props.Playlist])
    }

    function AdicionarPlay(item){
        let aux = props.Musicas2
        aux = aux.map((i) => i.Nome !== item.Nome && i)
        props.setMusicas2([...aux])
        props.setPlaylist([...props.Playlist, item] )
    }

    function TirarPlay(item){
        let aux = props.Playlist
        aux = aux.map((i) => i.Nome !== item.Nome && i)
        props.setPlaylist([...aux])
        props.setMusicas2([...props.Musicas2, item] )
    }


    return(
        <div>
                <div className={css.itens}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <img src={props.imagem} className={css.imagem} />
                        <div className={css.texto} style={{marginLeft:"10px",textAlign:"justify"}}>
                            <p className={css.musica} style={{marginBottom:"0px",marginTop:"0px", fontWeight:"bold"}}>{props.nome}</p>
                            <p className={css.cantor} style={{marginBottom:"0px",marginTop:"0px"}}>{props.cantor}</p>
                        </div>
                    </div>
                    {/*<button className={css.botao_item} onClick={() => Excluir(index)}>*/}
                    <div>

                        {props.add === true ? (
                            <button className={css.botao} onClick={() => AdicionarPlay(props.item)} style={{background:" #E3E3E3",border:"none"}}>
                                <img src={'/botao-adicionar.png'} />
                            </button>
                        ) :
                            <button className={css.botao} onClick={() => TirarPlay(props.item)} style={{background:" #E3E3E3",border:"none"}}>
                                <img src={'/remover.png'} />
                            </button> }

                        <button className={css.botao_item} onClick={() => SoltarMusica(props.item)}  style={{background:" #E3E3E3",border:"none"}}>
                            {props.item.play === true ? <img src={"/Pusa.png"} /> : <img src={"/Play.png"} />}
                        </button>
                    </div>
                </div>
        </div>
    )
}


export default CardMusica