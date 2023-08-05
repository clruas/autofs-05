import { Outlet } from "react-router-dom"
import { Menu, Title, Content, Header, Footer, Nav } from "../components/"

function Layout() {
	return (
		<div className="h-screen bg-slate-200 grid grid-rows-[80px_1fr_80px] md:grid-cols-[300px_auto] md:grid-rows-[70px_auto]">
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
		/* 
		<div className="h-screen bg-slate-200 grid grid-rows-2 md:grid-cols-[300px_auto] md:grid-rows-1 text-6xl">
			<div className="bg-teal-300 grid md:grid-rows-[70px_1fr_70px]">
				<div className="bg-lime-300">LOGO</div>
				<div className="bg-red-300">MENU</div>
				<div className="bg-teal-300">INFO</div>
			</div>
			<div className="bg-blue-300 grid md:grid-rows-[70px_1fr_70px]">
				<div className="bg-green-300">HEADER</div>
				<div className="bg-pink-300">CONTENT</div>
				<div className="bg-amber-300">FOOTER</div>
			</div>
		</div>
		*/

		/* 
		<div className="h-screen bg-slate-200 grid grid-rows-[70px_auto_50px] md:grid-rows-[70px_1fr] md:grid-cols-[300px_auto]">
			<Header>
				<Title />
			</Header>
			<Outlet />
			<SideBar>
				<Menu />
				<div>teste</div>
				</div>
			</SideBar>
		</div>
		*/
	)
}

export default Layout