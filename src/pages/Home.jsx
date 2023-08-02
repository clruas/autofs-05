import { useNavigate } from "react-router-dom"
import { supabase } from "../services/supabase"
import useAuth from "../hooks/useAuth"

function Home() {
	const { setAuth } = useAuth()
	const navigate = useNavigate()

	async function logOut(){
		await supabase.auth.signOut()
		setAuth({})
		navigate('/login')
	}
	
	return (
		<div>
			<h1>Home</h1>
			<button onClick={logOut}>Sair</button>
		</div>
	)
}

export default Home