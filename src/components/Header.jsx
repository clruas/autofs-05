function Header({ children }){
    return (
        <div className="grid grid-cols-[80px_1fr_80px] place-items-center md:grid-cols-1">{children}</div>
    )
}
export default Header