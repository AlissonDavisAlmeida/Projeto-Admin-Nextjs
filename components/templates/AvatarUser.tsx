import Link from "next/link";
import useAuth from "../../data/hook/authAppData";

interface AvatarUserProps{
    className? : string
}

function AvatarUser(props : AvatarUserProps) {

    const {usuario} = useAuth()
    return (  
        <Link href={`/perfil`} >
            <img src={usuario?.imagemUrl ?? "/favicon.ico"} 
            alt="Avatar do Usuário" className={`h-10 w-10 rounded-full cursor-pointer 
                                                ${props.className}`}/>
        </Link>
    );
}

export default AvatarUser;