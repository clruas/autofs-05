import { useEffect } from "react"
import { supabase } from '../services/supabase'
import { useRecoilState } from "recoil"
import { AuthState } from "../services/store"
import { useLocation, useNavigate } from "react-router-dom"

function useAuth() {
	const [auth, setAuth] = useRecoilState(AuthState)
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || "/"

	async function signOut(){
		await supabase.auth.signOut()
		setAuth({})
		navigate('/login')
	}

	async function signIn(email, password){
		const { data, error } = await supabase.auth.signInWithPassword({ email, password })
		const { user, access_token } = data.session
		setAuth({ user, access_token })
		navigate(from, { replace: true})
	}

	return { auth, setAuth, signIn, signOut }
}

export default useAuth