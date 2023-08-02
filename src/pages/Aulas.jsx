import useAuth from "../hooks/useAuth"

function Aulas() {
	const { signOut } = useAuth()

	async function handleSignOut(){
		await signOut()
	}
	
	return (
		<div>
			<h1>Aulas</h1>
			<button onClick={handleSignOut}>Sair</button>
		</div>
	)
}

export default Aulas