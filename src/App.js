import React from "react";
import "./Style/reset.css"
import "./Style/style.css"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

 function Letras(props) {
    console.log(props);
    return (
        <div className="letra"><a>{props.letra}</a></div>
   )
}
export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (<>
        <div className="container">
            <div className="topo">
                <div className="forca">
                    <img src={forca0} />
                </div>
                <div className="botao"><p className="escolha">Escolher Palavra</p></div>
            </div>
            <div className="baixo">
                <div className="teclado">
                    {alfabeto.map((a) => <Letras letra ={a.toUpperCase()}/>)}
                </div>
                <div className="chute"><h1>Já sei a palavra!</h1><input></input> <div><a className="button">Chutar</a></div></div>
            </div>
        </div>
    </>);
}

