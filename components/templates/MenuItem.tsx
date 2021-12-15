import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    onClick? : (evento : any) => void
    className? : string
}

function MenuItem(props: MenuItemProps) {
    return (
        <li className={`flex flex-col justify-center
         items-center m-2 cursor-pointer ${props.className}
         hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-all ease-in-out
         
        duration-300`} onClick={props.onClick}>
            <Link href={props.url ?? "#"}>
                <a className={`flex flex-col h-20 justify-center items-center w-full`}>
                    {props.icone}
                        <span className={`text-xs font-bold`}>
                            
                    {props.texto}
                        </span>

                </a>
            </Link>
        </li>
    );
}

export default MenuItem;