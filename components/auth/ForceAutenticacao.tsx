import Image from "next/image"
import router from "next/router"
import useAuth from "../../data/hook/authAppData"
import loading from "../../public/loading.gif"
import Head from "next/head"
function ForceAutenticacao(props) {

    const{usuario, carregando }= useAuth()

    const renderizarConteudo = ()=>{
        return (
            <>
            <Head>
                <script dangerouslySetInnerHTML={{
                    __html:`
                    if(!document.cookie?.includes("admin-template-cod3r-auth")){
                        window.location.href = "/autenticacao"
                    }
                    `
                }}>

                </script>
            </Head>
                {props.children}
            </>
        )
    }

    const renderizarCarregando = ()=>{
        return (
            <div className={`
            flex justify-center items-center h-screen
            `}>
                <Image src={loading}></Image>
            </div>
        )
    }
    
    if(!carregando && usuario?.email){
        return renderizarConteudo()
    }else if(carregando){
        return renderizarCarregando()
    }else{
        router.push("/autenticacao")
        return null
    }
}

export default ForceAutenticacao;