function Button({ children, ...rest }){
    return (
        <button className="bg-sky-500 text-white rounded text-sm px-2 py-1 hover:bg-sky-600" {...rest}>{children}</button>
    )
}
export default Button 