import { NavLink } from "react-router-dom"

function MenuItem({ children, ...rest}){
	return <NavLink className="" {...rest}>{children}</NavLink>
}

export default MenuItem