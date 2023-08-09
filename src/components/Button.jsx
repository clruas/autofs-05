import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

function Button({ to, className, children, variant="normal", ...rest }){
	const variants = {
		normal: "bg-slate-300 border-slate-300 text-slate-600 hover:bg-slate-400",
		primary: "bg-sky-500 border-sky-500 text-white",
		outline: "border-slate-400",
		success: "bg-emerald-500 border-emerald-500 text-white"
	}
	const classes = twMerge("border grid grid-flow-col-dense items-center rounded text-sm font-semibold py-2 px-2 outline-none", variants[variant], className)
	//const classes = twMerge("grid grid-flow-col-dense items-center border bg-sky-500 text-white rounded text-xs py-2 px-3 hover:bg-sky-600", className)
	if(to){
		return <Link className={classes} to={to} {...rest}>{children}</Link>
	} else {
		return <button className={classes} {...rest}>{children}</button>
	}
}

// function Button({ children, ...rest }){
//     return (
//         <button 
//             {...rest}
//             className={`${twMerge('grid grid-flow-col-dense items-center border bg-sky-500 text-white rounded text-xs py-2 px-3 hover:bg-sky-600', rest.className)}`}
//         >{children}</button>
//     )
// }

export default Button