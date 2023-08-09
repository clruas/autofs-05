import React from 'react'
import { ButtonList } from '../components/'
import { PiPencil, PiTrash, PiUser } from 'react-icons/pi'

function Usuario({ usuario }) {
    return (
        <div className="bg-white mb-1 grid grid-cols-[25px_250px_250px_100px_auto] py-2 px-3 items-center rounded hover:bg-slate-50">
            <PiUser />
            <div>{usuario.dados.firstName} {usuario.dados.lastName}</div>
            <div>{usuario.email}</div>
            <div>{usuario.tipo}</div>
            <div className='grid grid-flow-col place-content-end gap-3 '>
                <PiPencil size={18} className="text-sky-500 hover:text-sky-600 cursor-pointer" />
                <PiTrash size={18} className="text-red-500 hover:text-red-600 cursor-pointer" />
            </div>
        </div>
    )
}

export default Usuario