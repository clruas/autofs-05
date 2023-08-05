import { NavLink } from "react-router-dom"

function MenuItem({ image: Component, label, ...rest}){
	return <NavLink className="place-items-center grid md:grid-cols-[32px_1fr] md:place-items-start md:p-2 md:rounded" {...rest}>
		<Component className="h-8 w-8 md:h-6 md:w-6" />
		<span className="hidden md:block">{label}</span>
	</NavLink>
}

/*
function MenuItem({ children, ...rest}){
	return <NavLink className="grid md:grid-cols-2 md:rounded" {...rest}>
	{children}
	</NavLink>
}
*/

export default MenuItem