import { useEffect, useState } from 'react'
import { Page, Button } from '../components'
import { supabase } from '../services/supabase'
import Usuario from '../components/Usuario'
import { PiPencil } from 'react-icons/pi'

function UsuariosList() {
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
				<Button variant='primary' to="new">Novo usuario</Button>
			</Page.Header>			
			<Page.Content>
				<div className="h-[calc(100vh_-_100px)] overflow-y-scroll p-2">
					{usuarios.map(usuario => <Usuario key={usuario.id} usuario={usuario} /> )}
				</div>
			</Page.Content>
			<Page.Footer className="grid-flow-col gap-2">
				<PiPencil />
				<Button>Salvar</Button>
				<Button variant='outline' onClick={() => alert("Testando")}>Salvar</Button>
				<Button>Salvar</Button>
				<Button variant='success' onClick={() => alert("Testando")}>Salvar</Button>
			</Page.Footer>			
		</Page>
	)
}

export default UsuariosList