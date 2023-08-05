import MenuItem from "./MenuItem"
import { PiStudent, PiChalkboardTeacher, PiBooks, PiCurrencyCircleDollar, PiUsers, PiGauge } from 'react-icons/pi'

function Menu() {
	return (
		<nav className="grid grid-flow-col md:grid-flow-row md:px-4">
			<MenuItem to="/" label="Home" image={PiGauge} />
			<MenuItem to="/alunos" label="Alunos" image={PiStudent} />
			<MenuItem to="/instrutores" label="Instrutores" image={PiChalkboardTeacher} />
			<MenuItem to="/aulas" label="Aulas" image={PiBooks} />
			<MenuItem to="/financeiro" label="Financeiro" image={PiCurrencyCircleDollar} />
			<MenuItem to="/usuarios" label="Usuários" image={PiUsers} />
		</nav>
	)
}

export default Menu