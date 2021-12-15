import { Bell, Home, Settings, Logout } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

function MenuLateral() {
    return ( 
        <aside className="flex flex-col dark:bg-gray-900 dark:text-white">
            <div className={`h-20 w-full bg-gradient-to-r  from-indigo-400 to-purple-700 flex flex-col items-center justify-center
                        `}>
                  <Logo/>          
            </div>
            <ul className="flex-grow">
                <MenuItem icone={Home} url="/" texto="Inicio" className="hover:scale-110"/>
                <MenuItem icone={Settings} url="/ajustes" texto="Configurações" className="hover:scale-110"/>
                <MenuItem icone={Bell} url="/notificacoes" texto="Notificações" className="hover:scale-110"/>
            </ul>
            <ul>
                <MenuItem onClick={()=> console.log("logout")} texto="Sair" icone={Logout} className={`text-red-600 
                hover:text-white hover:bg-red-400 hover:animate-bounce dark:hover:bg-red-500`}/>
            </ul> 
        </aside>
     );
}

export default MenuLateral;