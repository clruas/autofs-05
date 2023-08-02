import { useEffect } from "react"
import { supabase } from '../services/supabase'
import { useRecoilState } from "recoil"
import { AuthState } from "../services/store"
import { useLocation, useNavigate } from "react-router-dom"

function useAuth() {
	const [auth, setAuth] = useRecoilState(AuthState)
	/*
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || "/"
	
	function verifyUserData(){
		async function getUserData(){
			//depois trocar para pegar os dados do usuario
			const { data, error } = await supabase.auth.getSession()
			console.log('PEGOU A SESSAO', data)
			const { user, access_token } = data.session
			setAuth({ user, access_token })
			//navigate(from, { replace: true})
		}
		getUserData()
	}
	useEffect(verifyUserData, [])
	*/
	return { auth, setAuth }
}

export default useAuth