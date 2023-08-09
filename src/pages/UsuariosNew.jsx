import { Page, Button } from '../components'

function UsuariosNew() {
	return (
		<Page>
			<Page.Header>
				<h1 className='text-md font-bold'>Novo Usuário</h1>
				<div></div>
				<div></div>
			</Page.Header>			
			<Page.Content>
				<div className="h-[calc(100vh_-_100px)] overflow-y-scroll p-2">
					<div>
						<ul>
							<li>Retirar imports nao utilizados </li>
							<li>Formulario de cadastro</li>
							<li>Criar funcao para facilitar o twMerge </li>
							<li>Criar Link igual o botao </li>
							<li>Formatar o footer para alinhar a direita e esquerda (criar sub-componentes footer.left, footer.right) </li>
							<li>Consertar a formatacao do componente Content </li>
							<li>Diminuir o tamanho do menu lateral </li>
						</ul>
					</div>
				</div>
			</Page.Content>
			<Page.Footer className="grid-flow-col">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<Button>Cancelar</Button>
				<Button>Salvar</Button>
			</Page.Footer>			
		</Page>
	)
}

export default UsuariosNew