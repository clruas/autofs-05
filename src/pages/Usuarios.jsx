import { useEffect, useState } from 'react'
import { Page, Button } from '../components'
import { supabase } from '../services/supabase'
//import { Modal } from '../components/Modal'

function Usuarios() {
	const [usuarios, setUsuarios] = useState([])
	function getData(){
		async function getUserData(){
			let { data, error } = await supabase.from('usuarios').select('*')
			console.log(data)
			setUsuarios(data)
		}
		getUserData()
	}
	useEffect(getData, [])
	return (
		<Page>
			<Page.Header>
				<h1 className='text-xl font-bold'>Usuários</h1>
				<div></div>
				<Button>Novo usuario</Button>
			</Page.Header>			
			<Page.Content>
				{usuarios.map(usuario => {
					return <div>
						<div>{usuario.dados.firstName} {usuario.dados.lastName}</div>
						<div>{usuario.email}</div>
						<div>{usuario.tipo}</div>
						<div><Button>Detalhes</Button></div>
						<div><Button>Excluir</Button></div>
					</div>
				})}
			</Page.Content>
			<Page.Footer>
				footer
			</Page.Footer>			
		</Page>
	)
}

export default Usuarios