import React from "react";
import palavras from "./palavras"
import "./Style/reset.css"
import "./Style/style.css"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

function conferePalavra(props){
    const letraRecebida = props.target.innerText
    console.log(letraRecebida.toLowerCase());

}
function Letras(props) {
    if (props.novaPalavra === '') {
        console.log(props.novaPalavra)
        return (
            <div className="letra-desabilitada"><a>{props.letra}</a></div>
        )
    } else {
        return (
            <div className="letra-habilitada" onClick={(a) => conferePalavra(a)}><a>{props.letra}</a></div>
        )
    }

}


export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [novaPalavra, setNovaPalavra] = React.useState("")

    function sorteiaPalavra() {
        let palavraEscondida = "";
        const indexSorteado = Math.floor(Math.random() * palavras.length);
        const palavraSorteada = palavras[indexSorteado];
        console.log(palavras[indexSorteado].length);

        for (let i = 1; i <= palavraSorteada.length; i++) {
            palavraEscondida = palavraEscondida + "_ "
            console.log(palavraEscondida);
        }

        setNovaPalavra(palavraEscondida);

    }

    return (<>
        <div className="container">
            <div className="topo">
                <div className="forca">
                    <img src={forca0} />
                </div>
                <div className="botao" onClick={sorteiaPalavra}><p className="escolha">Sortear Palavra</p></div>
                <div className="setPalavra">{novaPalavra}</div>
            </div>
            <div className="baixo">
                <div className="teclado">
                    {alfabeto.map((a) => <Letras letra={a.toUpperCase()} novaPalavra={novaPalavra} />)}
                </div>
                <div className="chute"><h1>Já sei a palavra!</h1><input></input> <div><a className="button">Chutar</a></div></div>
            </div>
        </div>
    </>);
}

