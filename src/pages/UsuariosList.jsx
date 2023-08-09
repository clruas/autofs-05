import { useEffect, useState } from 'react'
import { ButtonList, Page } from '../components'
import { supabase } from '../services/supabase'
import Usuario from '../components/Usuario'
import { Link } from 'react-router-dom'
import { PiPencil } from 'react-icons/pi'
import { twMerge } from 'tailwind-merge'

function Button({ to, className, children, variant="normal", ...rest }){
	const variants = {
		normal: "bg-slate-300 border-slate-300 text-slate-600 hover:bg-slate-400",
		primary: "bg-sky-500 border-sky-500 text-white",
		outline: "border-slate-400",
		success: "bg-emerald-500 border-emerald-500 text-white"
	}
	const classes = twMerge("border grid grid-flow-col-dense items-center rounded text-sm font-semibold py-2 px-2 outline-none", variants[variant], className)
	//const classes = twMerge("grid grid-flow-col-dense items-center border bg-sky-500 text-white rounded text-xs py-2 px-3 hover:bg-sky-600", className)
	if(to){
		return <Link className={classes} to={to} {...rest}>{children}</Link>
	} else {
		return <button className={classes} {...rest}>{children}</button>
	}
}

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
				<ButtonList>
                    <ButtonList.Icon className="text-sky-500" icon={PiPencil} />
                </ButtonList>
				<Button>Salvar</Button>
				<Button variant='outline' onClick={() => alert("Testando")}>Salvar</Button>
				<Button>Salvar</Button>
				<Button variant='success' onClick={() => alert("Testando")}>Salvar</Button>
			</Page.Footer>			
		</Page>
	)
}

export default UsuariosList