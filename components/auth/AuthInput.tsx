interface AuthInputProps{
    label : string
    valor : any
    valorMudou: (novoValor : any)=>void
    tipo : "email" | "text" | "password"
}

function AuthInput(props : AuthInputProps) {
    return (  
        <div className="flex flex-col justify-center items-center ">
            <label className="font-medium p-2">{props.label}</label>
            <input type={props.tipo} required
                    value={props.valor}
                    onChange={e=>props.valorMudou?.(e.target.value)}
                    className={`
                    px-4 py-3 rounded-lg w-full border focus:border-blue-500
                    focus:outline-none
                    `}
            />
        </div>
    );
}

export default AuthInput;