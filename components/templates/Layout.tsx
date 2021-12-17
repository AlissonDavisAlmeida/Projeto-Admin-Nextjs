import UseAppData from "../../data/hook/useAppData";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral"


interface LayoutProps{
    titulo : string
    subtitulo?: string
    children? : any
}

function Layout(props :LayoutProps) {

    const {tema, alternarTema} = UseAppData()
    return (
        <div className={`flex h-screen w-screen ${tema}`}>
            
            <MenuLateral/>
            <div className={`flex flex-col bg-gray-300 w-full p-7 dark:bg-gray-700  text-gray-500`}>
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
            <Conteudo>{props.children}</Conteudo>

            </div>
        </div>
      );
}

export default Layout;