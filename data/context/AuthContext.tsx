import { createContext , useEffect, useState} from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";
import route from "next/router"
import Cookies from "js-cookie"


interface AuthContextProps{
    usuario?:Usuario
    carregando? :boolean
    loginGoogle?: ()=>Promise<void>
    loginEmail?:(email:string, senha:string)=>Promise<void>
    cadastrarUsuario?:(email:string, senha:string)=>Promise<void>
    logout?:()=>void
}

const AuthContext = createContext<AuthContextProps>({

})


const usuarioNormalizado = async(usuarioFirebase :firebase.User):Promise<Usuario>=>{
    const token =await usuarioFirebase.getIdToken()
    return {
        uid:usuarioFirebase.uid,
        nome:usuarioFirebase.displayName,
        email:usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl:usuarioFirebase.photoURL
    }
}

function gerenciarCookie(logado : boolean){
    if(logado){
        Cookies.set("admin-template-cod3r-auth", logado, {
            expires:7
        })
    }else{
        Cookies.remove("admin-template-cod3r-auth")
    }
}



export function AuthProvider(props){
    const [carregando, setcarregando] = useState(true);
    const [usuario, setusuario] = useState<Usuario>(null);

  async function configurarSessao(usuarioFirebase){
        if(usuarioFirebase?.email){
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setusuario(usuario)
            gerenciarCookie(true)
            setcarregando(false)
            return usuario.email
        }else{
            setusuario(null)
            gerenciarCookie(false)
            setcarregando(false)
            return false
        }
    }

    const loginGoogle =async ()=>{
        try{
            setcarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )   
           
               await configurarSessao(resp.user)
                route.push("/")
        }finally{
            setcarregando(false)
        }
  
    }


    const loginEmail =async (email, senha)=>{
        try{
            setcarregando(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)
             
           await configurarSessao(resp.user)
           route.push("/") 
        }finally{
            setcarregando(false)
        }
  
    }


    const cadastrarUsuario =async (email, senha)=>{
        try{
            setcarregando(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, senha)
             
          await configurarSessao(resp.user)
           route.push("/") 
        }finally{
            setcarregando(false)
        }
  
    }

    const logout = async()=>{
        try{

            setcarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        }catch(err){
            console.log(err);
        }finally{
            setcarregando(false)
        }
    }

    useEffect(() => {
        if( Cookies.get("admin-template-cod3r-auth")){

            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)    
            return () => cancelar()
        }else{
            setcarregando(false)
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            usuario, 
            carregando,
            loginGoogle,
            cadastrarUsuario,
            loginEmail,
            logout
        }}>
                {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext