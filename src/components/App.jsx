import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RecoilRoot } from "recoil"

import { 
	Home, 
	Login, 
	Aulas, 
	Alunos, 
	NotFound, 
	Layout, 
	Instrutores, 
	Financeiro, 
	Usuarios, 
	UsuariosList, 
	UsuariosNew
} from '../pages'
import RequireAuth from "./RequireAuth"

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route element={<RequireAuth />}>
							<Route index element={<Home />} />
							<Route path="alunos" element={<Alunos />} />
							<Route path="instrutores" element={<Instrutores />} />
							<Route path="aulas" element={<Aulas />} />
							<Route path="financeiro" element={<Financeiro />} />
							<Route path="usuarios" element={<Usuarios />}>
								<Route index element={<UsuariosList />} />
								<Route path="new" element={<UsuariosNew />} />
							</Route>
						</Route>
					</Route>
					<Route path="login" element={<Login />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App
