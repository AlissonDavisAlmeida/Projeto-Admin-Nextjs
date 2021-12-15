function Logo() {
    return ( 
        <div className={`
        flex flex-col items-center justify-center 
        h-12 w-2/4 rounded-full
        bg-white
        `}> 
        <div className={`h-3 w-3 rounded-full bg-red-600 mb-0.5`}></div>
        <div className="flex mb-0.5">
            <div className="h-3 w-3 rounded-full mr-0.5 bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400 ml-0.5"></div>
        </div>

        </div>
     );
}

export default Logo;