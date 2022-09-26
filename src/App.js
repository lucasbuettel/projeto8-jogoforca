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



function Letras(props) {
    
    const [letraHabilitada, setLetraHabilitada] = React.useState("letra-habilitada");
    const[desabilitar, setDesabilitar] = React.useState(false)

    if (props.novaPalavra === "") {

        return (
            <button className="letra-desabilitada" data-identifier="letter"><a>{props.letra}</a></button>
        )
    } else {
        return (
            <button className={letraHabilitada} disabled={props.jogoRolando && letraHabilitada === "letra-habilitada" ? false : true} data-identifier="letter" onClick={() => props.conferePalavra(props.letra, setLetraHabilitada, setDesabilitar)}><a>{props.letra}</a></button>
        )
    }

}

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [novaPalavra, setNovaPalavra] = React.useState("");
    const [arr, setNovoArr] = React.useState("");
    const [foto, setFoto] = React.useState(forca0);
    const [erro, setErro] = React.useState(1);
    const [cor, setCor] = React.useState("");
    const [chutar, setChutar]= React.useState("");
    const [jogoRolando, setJogoRolando] = React.useState(false);
    
    let letraClicada = ""


    function conferePalavra(props, setLetraHabilitada, setDesabilitar) {
        
        letraClicada = props.toLowerCase();

        arr.forEach((item, indice) => {

            if (letraClicada === item) {
                novaPalavra[indice] = arr[indice];
                console.log(novaPalavra);
            }


        });
        if (!arr.includes(letraClicada)) {

            setErro(erro + 1);
            console.log(erro);

            if (erro === 1) {
                setFoto(forca1);

            } if (erro === 2) {
                setFoto(forca2);

            } if (erro === 3) {
                setFoto(forca3);

            } if (erro === 4) {
                setFoto(forca4);

            } if (erro === 5) {
                setFoto(forca5);

            } if (erro === 6) {
                setFoto(forca6);
                alert("perdeu");
                setCor("vermelho");
                setJogoRolando(false)
                setLetraHabilitada("letra-desabilitada");
                return setNovaPalavra(arr);
            }
        }


        let j = 0;
        for (let i = 0; i < arr.length; i++) {
            if (novaPalavra[i] === arr[i]) {
                j++;
            }
            if (j === arr.length) {
                setCor("verde");
                alert("acerto miseravi");
                setJogoRolando(false)
                
            }
        }



        
        console.log(letraClicada);
        setNovaPalavra([...novaPalavra]);
        setLetraHabilitada("letra-desabilitada");
        setDesabilitar(true);
        


    }

    

    function removerCaracteres(str) {
        str = str.toLowerCase();
        str = str.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        str = str.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        str = str.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        str = str.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        str = str.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        str = str.replace(new RegExp('[Ç]', 'gi'), 'c');
        return str;
    }

    function sorteiaPalavra() {
        setJogoRolando(true);
        let novoArr = [];
        let arrayPalavra = [];

        const indexSorteado = Math.floor(Math.random() * palavras.length);
        const palavraSorteada = removerCaracteres(palavras[indexSorteado]);
        console.log(palavras[indexSorteado].length);

        for (let i = 0; i < palavraSorteada.length; i++) {
            novoArr.push('_ ');
            arrayPalavra.push(palavraSorteada[i]);

        }
        
        console.log(arrayPalavra);
        setNovaPalavra(novoArr);
        setNovoArr(arrayPalavra);
        setFoto(forca0);
        setErro(1);
        setCor("");
        
    }

    function chutarPalavra(){
        let confereChute ="";
        for(let i=0; i<arr.length; i++){
        confereChute = confereChute + arr[i];
        console.log(confereChute);}

        if(chutar === confereChute){
            setNovaPalavra(arr);
            setCor("verde");
            alert("acertô miseravi");
            
            
        } else{
            setFoto(forca6);
            setCor("vermelho");
            setNovaPalavra(arr);
            alert("Péssimo chute!");
            

        }
        setJogoRolando(false);
        
    }

    return (<>
        <div className="container">
            <div className="topo">
                <div className="forca">
                    <img src={foto} data-identifier="guess-button"/>
                </div>
                <div className="botao" onClick={sorteiaPalavra} data-identifier="choose-word"><p className="escolha">Sortear Palavra</p></div>
                <div className={`setPalavra ${cor}`} data-identifier="word">{novaPalavra}</div>
            </div>
            <div className="baixo">
                <div className="teclado">
                    {alfabeto.map((a) => <Letras letra={a.toUpperCase()} novaPalavra={novaPalavra} conferePalavra = {conferePalavra} jogoRolando ={jogoRolando}/>)}
                </div>
                <div className="chute" >
                    <h1>Já sei a palavra!</h1><input placeholder="Chute aqui!" value={chutar} onChange={(c) => setChutar(c.target.value)} data-identifier="type-guess"></input><div>
                        <a className="button" onClick={chutarPalavra} data-identifier="guess-button">Chutar</a></div>
                </div>
            </div>
        </div>
    </>);
}

