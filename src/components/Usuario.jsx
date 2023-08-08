import React from 'react'
import { ButtonList } from '../components/'
import { PiPencil, PiTrash, PiUser } from 'react-icons/pi'

function Usuario({ usuario }) {
    return (
        //bg-white grid grid-cols-[300px_200px_100px_auto] rounded-md border text-sm items-center
        <div className="bg-white mb-1 grid grid-cols-[25px_250px_250px_100px_auto] p-2 items-center rounded hover:bg-slate-50">
            <PiUser />
            <div>{usuario.dados.firstName} {usuario.dados.lastName}</div>
            <div>{usuario.email}</div>
            <div>{usuario.tipo}</div>
            <div className='grid grid-flow-col place-content-end gap-1'>
                <ButtonList>
                    <ButtonList.Icon className="text-sky-500" icon={PiPencil} />
                </ButtonList>
                <ButtonList>
                    <ButtonList.Icon className="text-rose-600" icon={PiTrash} />
                </ButtonList>
            </div>
        </div>
    )
}

export default Usuario