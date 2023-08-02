import { Link, useLocation, useNavigate } from "react-router-dom"
import { supabase } from "../services/supabase"
import useAuth from "../hooks/useAuth"

function Login() {
	const { signIn } = useAuth()

	async function handleSignIn(){
		const email = 'clruas@gmail.com'
		const password = '123'
		await signIn(email, password)
	}
	return (
		<div>
			<h1>Login</h1>
			{/* <Link to="/">TESTAR O HOME</Link> */}
			<button onClick={handleSignIn}>CLIQUE Fazer login</button>
		</div>
	)
}

export default Login