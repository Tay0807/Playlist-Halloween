import './App.css';
import Lista from "./Componentes/Lista";
import {useState} from "react";
import CardMusicaPlaylist from "./Componentes/CardMusicaPlaylist";

function App() {
    const [Musicas, setMusicas] = useState([
        {Nome:"Just Dance", Img:"./JustDance.jfif", Cantora:"Lady Gaga", video: new Audio("./JustDance.mp3"), play: false},
        {Nome:"Triller", Img: "./Triller.jfif", Cantora: "Machael Jackson", video: new Audio("./Thriller.mp3"), play: false},
        {Nome:"Família Addams", Img: "./Addams.jfif", Cantora: "The Family Addams", video:new Audio("./Addams.mp3"), play: false},
        {Nome:"Spooky Scary Skeletons", Img: "./Spooky.jfif", Cantora: "Andrew Gold", video: new Audio("Spooky.mp3"), play: false},
        {Nome:"This Is Halloween", Img: "./ThisIsHalloween.jfif", Cantora: " Marilyn Manson", video: new Audio("ThisIsHalloween.mp3"), play: false},
        {Nome:"Ghostbusters", Img: "./Ghostbusters.jfif", Cantora: "Ray Parker Jr.", video: new Audio("Ghostbusters.mp3"), play: false},
        {Nome:"Five Nights at Freddy's", Img:"./Fnaf.jfif", Cantora:"Filme: Five Nights at Freddy's", video: new Audio("Fnaf.mp3"), play: false},
        {Nome:"Highway to Hell", Img: "./AcDc.jfif", Cantora: "Banda AcDc", video: new Audio("AcDc.mp3"),play: false},
        {Nome:'Tumbalacatumba', Img: "./Tumbalacatumba.jfif", Cantora:"Galinha Pintadinha", video: new Audio("Tumbalacatumba.mp3"),play: false},
        {Nome:"Vai Chegar a Sua Vez", Img:"NoivaCadaver.jfif", Cantora:"Filme: A Noiva Cadáver", video:new Audio("NoivaCadaver.mp3"),play: false}
    ])

    const [Playlist, setPlaylist] = useState([])

    return (
    <div className="App"  style={{backgroundImage: "url(/Halloween.png)"}} >
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr" }}>

            <div style={{height:"300px", marginTop:"40px"}}>
                <h2 style={{fontFamily: "Creepster", color:"white"}}>Músicas disponiveis</h2>
                <div style={{overflow:"auto",height:"300px"}}>
                    <Lista Playlist={Playlist} setPlaylist={setPlaylist} Musicas={Musicas} setMusicas={setMusicas} ></Lista>
                </div>

            </div>

            <div style={{height:"300px", marginTop:"40px"}}>
                <h2 style={{fontFamily: "Creepster", color:"white"}}>Minha Playlist</h2>
                <div style={{overflow:"auto",height:"300px"}}>
                    <CardMusicaPlaylist Playlist={Playlist} setPlaylist={setPlaylist} Musicas={Musicas} setMusicas={setMusicas}></CardMusicaPlaylist>
                </div>
            </div>

        </div>
    </div>
  );
}

export default App;
