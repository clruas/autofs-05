import { Outlet } from "react-router-dom"
import { Menu } from "../components/"

function Layout() {
	return (
		<div>
			<h1>Layout</h1>
			<Menu />
            <Outlet />
		</div>
	)
}

export default Layout