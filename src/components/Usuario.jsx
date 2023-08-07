import React from 'react'

function Usuario({ usuario }) {
    return (
        <div className="">
            <div>{usuario.dados.firstName}</div>
        </div>
    )
}

export default Usuario