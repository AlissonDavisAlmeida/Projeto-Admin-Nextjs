import { createContext, useState, useEffect } from "react";

type Tema = "dark" | ""

interface AppContextProps {
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})



export function AppProvider(props) {
    const [tema, setTema] = useState("dark");


    const alternarTema = () => {
        const novoTema = tema === "dark" ? "" : "dark"
        setTema(novoTema)
        localStorage.setItem("tema", novoTema)
        console.log(tema);
    }

    useEffect(() => {
        const valor = localStorage.getItem("tema")
        setTema(valor)
       
    }, [])


    return (
        <AppContext.Provider value={{
            tema,
            alternarTema: alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
