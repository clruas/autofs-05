
import useAuth from "../hooks/useAuth"

function Home() {
	const { signOut } = useAuth()
	
	async function logOut(){
		await signOut()
	}
	
	return (
		<div className="md:row-span-2"> {/* aqui tem que ser um componente para todas as paginas */}
			<h1>Home</h1>
			<button onClick={logOut}>Sair</button>
		</div>
	)
}

export default Home