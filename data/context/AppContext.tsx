import { createContext, useState } from "react";

type Tema = "dark" | ""

interface AppContextProps {
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})



export function AppProvider(props) {
    const [tema, setTema] = useState<Tema>("dark");


    const alternarTema = () => {
        setTema(tema === "dark" ? "" : "dark")
        console.log(tema);
    }
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
