import { NavLink } from "react-router-dom"

function MenuItem({ image: Component, label, ...rest}){
	return <NavLink className="grid md:grid-cols-[32px_1fr] md:p-2 md:rounded" {...rest}>
		<Component size={24} />
		<span>{label}</span>
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