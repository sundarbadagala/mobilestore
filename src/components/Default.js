import React from 'react'
import {useParams} from 'react-router-dom'

function Default() {
    let {name}= useParams()
    return (
        <div className='p-5 text-center'>
            <h2>404 error, page <span className='text-danger'>/{name}</span> is not found</h2>
        </div>
    )
}

export default Default
