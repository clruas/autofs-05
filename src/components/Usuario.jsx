import React from 'react'
import Button from './Button'
import { PiTrash } from 'react-icons/pi'

function Usuario({ usuario }) {
    return (
        <div className="bg-white grid grid-cols-[300px_200px_100px_auto] rounded-md p-2 m-1 border">
            <div>{usuario.dados.firstName} {usuario.dados.lastName}</div>
            <div>{usuario.email}</div>
            <div>{usuario.tipo}</div>
            <div className='grid grid-flow-col place-content-end gap-1'>
                <div className='self-end'>
                    <Button type="normal"> Detalhes</Button>
                </div>
                <div className='self-end'>
                    <Button type="normal"><PiTrash/><span>Excluir</span></Button>
                </div>
            </div>
        </div>
    )
}

export default Usuario