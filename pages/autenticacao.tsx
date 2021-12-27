import AuthInput from "../components/auth/AuthInput";
import { useState } from "react"

import { Google, IconeAtencao } from "../components/icons";
import useAuth from "../data/hook/authAppData";

function Autenticacao() {

    const { cadastrarUsuario,loginEmail, loginGoogle } = useAuth()

    const [email, setemail] = useState("");
    const [senha, setsenha] = useState("");
    const [modo, setmodo] = useState<"login" | "cadastro">("login");
    const [erro, seterro] = useState(false);
  
    const exibirErro = (msg, tempo = 5000)=>{
        seterro(true)
        
        setTimeout(() => {
            seterro(false)    
        }, tempo);
    }

    const submit = async() => {
        try{

            if (modo === "login") {
                await loginEmail(email, senha)
            } else {
               await cadastrarUsuario(email, senha)
            }
        }catch(err){
           exibirErro(err.message)
            console.log(err);
        }
    }

    return (
        <div className=" flex justify-start  items-center h-screen bg-indigo-100">
            <div className="h-screen md:w-1/2 w-0 mr-5 lg:w-2/3 shadow-blue-800 shadow-xl">
                <img src="https://source.unsplash.com/random" className="h-full  w-full hidden md:block" alt="Imagem da tela de autenticação" />
            </div>
            <div className="flex flex-col md:w-1/2 w-screen h-screen p-4 lg:w-1/3">
                <h1 className={` text-xl text-center mb-20  rounded-full font-bold bg-blue-400 text-white w-full p-2`} >
                    {modo === "login" ? "Login" : "Cadastro"}</h1>

                {erro ? (
                <div className={`bg-red-400 mb-4 text-white py-3 px-5 rounded-md flex justify-center animate-bounce`}>
                    {IconeAtencao()}
                    <span className="ml-4">Ocorreu um Erro</span>
                </div>

                ):false}

                <AuthInput label="Email" valor={email} valorMudou={setemail} tipo="text" />
                <AuthInput label="senha" valor={senha} valorMudou={setsenha} tipo="password" />
                <button onClick={submit} className=" rounded-full p-2 text-white bg-indigo-500 hover:bg-indigo-400 mt-5">
                    {modo === "login" ? "Entrar" : "Cadastrar"}
                </button>
                <hr className="my-6 border-gray-300 w-full" />
                <button onClick={loginGoogle} className=" rounded-full p-2  text-white bg-red-500 hover:bg-red-400 mt-2">

                    {modo === "login" ? "Entrar com o Google" : "Cadastrar"}
                </button>
                {modo === "login" ? (
                    <p className="mt-8 text-center">
                        <a onClick={() => setmodo("cadastro")} className={`text-blue-500 hover:text-blue-700 cursor-pointer
                                                                font-bold`}>Criar Conta</a>
                    </p>
                ) : (
                    <p className="mt-8 text-center">
                        <a onClick={() => setmodo("login")} className={`text-blue-500 hover:text-blue-700 cursor-pointer
                                                                font-bold`}>Fazer Login</a>
                    </p>
                )

                }
            </div>
        </div>
    );
}

export default Autenticacao;