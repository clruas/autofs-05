import MenuItem from "./MenuItem"
import { AiOutlineDashboard } from 'react-icons/ai'
import { PiStudent, PiChalkboardTeacher, PiBooks, PiCurrencyCircleDollar, PiUsers, PiGauge } from 'react-icons/pi'

function Menu() {
	return (
		<nav className="grid md:grid-flow-row md:px-4">
			<MenuItem to="/" label="Home" image={PiGauge} />
			<MenuItem to="/alunos" label="Alunos" image={PiStudent} />
			<MenuItem to="/instrutores" label="Instrutores" image={PiChalkboardTeacher} />
			<MenuItem to="/aulas" label="Aulas" image={PiBooks} />
			<MenuItem to="/financeiro" label="Financeiro" image={PiCurrencyCircleDollar} />
			<MenuItem to="/usuarios" label="Usuários" image={PiUsers} />

			{/* 
			<MenuItem to="/">
				<PiGauge size={20} />
				<span>Home</span>
			</MenuItem>
			<MenuItem to="/alunos">
				<PiStudent size={24}/>
				<span>Alunos</span>
			</MenuItem>
			<MenuItem to="/instrutores">
				<PiChalkboardTeacher size={24}/>
				<span>Instrutores</span>
			</MenuItem>
			<MenuItem to="/aulas">
				<PiBooks size={24}/>
				<span>Aulas</span>
			</MenuItem>
			<MenuItem to="/financeiro">
				<PiCurrencyCircleDollar size={24}/>
				<span>Financeiro</span>
			</MenuItem>
			<MenuItem to="/usuarios">
				<PiUsers size={24}/>
				<span>Usuarios</span>
			</MenuItem>
			*/}
		</nav>
	)
}

export default Menu