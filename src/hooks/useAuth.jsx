import { useEffect, useState } from "react"
import { supabase } from '../services/supabase'

function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(false)	
	return { isAuthenticated }
}

export default useAuth