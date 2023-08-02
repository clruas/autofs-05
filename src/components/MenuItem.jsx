import { Link } from "react-router-dom"

function MenuItem({ children, ...rest}){
	return <Link className="mr-6" {...rest}>{children}</Link>
}

export default MenuItem