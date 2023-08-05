import { Outlet } from "react-router-dom"
import { Menu, Title, Content, Header, Footer, Nav } from "../components/"

function Layout() {
	return (
		<div className="h-screen bg-slate-200 grid grid-rows-[60px_1fr_60px] md:grid-cols-[240px_auto] md:grid-rows-[70px_auto]">
			<Header>
				<Nav />
				<Title />
			</Header>
			<Content>
				<Outlet />
			</Content>
			<Footer>
				<Menu />
			</Footer>
		</div>
	)
}

export default Layout