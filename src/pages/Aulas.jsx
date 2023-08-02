import { useNavigate } from "react-router-dom"
import { supabase } from "../services/supabase"
import useAuth from "../hooks/useAuth"

function Aulas() {
	const { setAuth } = useAuth()
	const navigate = useNavigate()

	async function logOut(){
		await supabase.auth.signOut()
		setAuth({})
		navigate('/login')
	}
	
	return (
		<div>
			<h1>Aulas</h1>
			<button onClick={logOut}>Sair</button>
		</div>
	)
}

export default Aulas