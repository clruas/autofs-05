import { useEffect, useState } from 'react'
import { Page, Button } from '../components'
import { supabase } from '../services/supabase'
import Usuario from '../components/Usuario'

function Usuarios() {
	const [usuarios, setUsuarios] = useState([])
	function getData(){
		async function getUserData(){
			let { data, error } = await supabase.from('usuarios').select('*')
			setUsuarios(data)
		}
		getUserData()
	}
	useEffect(getData, [])
	return (
		<Page>
			<Page.Header>
				<h1 className='text-md font-bold'>Usuários</h1>
				<div></div>
				<Button>Novo usuario</Button>
			</Page.Header>			
			<Page.Content>
				<div className="h-[calc(100vh_-_100px)] overflow-y-scroll p-2">

					{usuarios.map(usuario => <Usuario key={usuario.id} usuario={usuario} /> )}
					{/* {Array.from({ length: 100 }).map(item => <div>Testando</div>)} */}
					{/* {console.log(Array.from({length: 10 }))} */}
				</div>
			</Page.Content>
			<Page.Footer>
				footer
			</Page.Footer>			
		</Page>
	)
}

export default Usuarios