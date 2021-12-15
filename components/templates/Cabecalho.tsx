
import Titulo from "./Titulo";


interface CabecalhoProps{
    titulo : string
    subtitulo: string
    
}

function Cabecalho(props :CabecalhoProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
        </div>
      );
}

export default Cabecalho;