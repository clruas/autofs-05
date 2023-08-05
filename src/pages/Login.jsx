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
		<div className="h-screen grid grid-rows-[70px_auto]">
			<h1>Login</h1>
			<div>
				<div>
					<label htmlFor="">Usuario</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">Senha</label>
					<input type="password" />
				</div>
				<button onClick={handleSignIn}>CLIQUE Fazer login</button>
			</div>
		</div>
	)
}

export default Login