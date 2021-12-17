import { Sol, Lua } from "../icons/index"

interface BotaoAlternarTemaProps {
    tema: string
    alternarTema: () => void
}

function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    return props.tema === "dark" ? (
        <div onClick={props.alternarTema} className={`
            hidden sm:flex  cursor-pointer
            flex items-center
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`flex items-center justify-center
                            bg-white text-yellow-600 rounded-full`}>
                {Sol("h-5 w-5")}
            </div>
            <div className={`hidden lg:flex items-center ml-4 text-white font-bold`}>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={`
        hidden sm:flex  cursor-pointer
        flex items-center justify-end
        bg-gradient-to-r from-gray-600 to-gray-400
        w-14 lg:w-24 h-8 p-2 rounded-full
    `}>
        <div className={`hidden lg:flex items-center mr-2 text-gray-300 font-bold`}>
            <span>Escuro</span>
        </div>
        <div className={`flex items-center justify-center
                         text-yellow-600 bg-slate-800 rounded-full`}>
            {Lua("h-6 w-6 ")}
        </div>
        
    </div>
    );
}

export default BotaoAlternarTema;