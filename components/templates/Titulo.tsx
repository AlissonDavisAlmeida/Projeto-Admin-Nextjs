interface TituloProps{
    titulo : string
    subtitulo : string
}

function Titulo(props: TituloProps) {
    return ( 
        <div>
            <h1 className={`font-black text-3xl text-gray-900 dark:text-white`}>{props.titulo}</h1>
            <h2 className={`font-extrabold text-sm text-gray-800 dark:text-white`}>{props.subtitulo}</h2>
        </div>
     );
}

export default Titulo;