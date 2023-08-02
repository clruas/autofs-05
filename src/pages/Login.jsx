import { Link, useLocation, useNavigate } from "react-router-dom"
import { supabase } from "../services/supabase"
import useAuth from "../hooks/useAuth"

function Login() {
	const { setAuth } = useAuth()
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || "/"

	async function signIn(){
		const email = 'clruas@gmail.com'
		const password = '123'
		const { data, error } = await supabase.auth.signInWithPassword({ email, password })
		const { user, access_token } = data.session
		//console.log('LOGIN', user, access_token)
		setAuth({ user, access_token })
		navigate(from, { replace: true})
	}
	return (
		<div>
			<h1>Login</h1>
			{/* <Link to="/">TESTAR O HOME</Link> */}
			<button onClick={signIn}>CLIQUE Fazer login</button>
		</div>
	)
}

export default Login