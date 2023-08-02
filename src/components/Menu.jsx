import MenuItem from "./MenuItem"

function Menu() {
	return (
		<nav>
			<MenuItem to="/">Home</MenuItem>
			<MenuItem to="/alunos">Alunos</MenuItem>
			<MenuItem to="/instrutores">Instrutores</MenuItem>
			<MenuItem to="/aulas">Aulas</MenuItem>
			<MenuItem to="/financeiro">Financeiro</MenuItem>
			<MenuItem to="/usuarios">Usuarios</MenuItem>
		</nav>
	)
}

export default Menu