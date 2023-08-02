
import useAuth from "../hooks/useAuth"

function Home() {
	const { signOut } = useAuth()
	
	async function logOut(){
		await signOut()
	}
	
	return (
		<div>
			<h1>Home</h1>
			<button onClick={logOut}>Sair</button>
		</div>
	)
}

export default Home