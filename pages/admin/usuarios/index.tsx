import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div>
            Pagina de admin de usuarios
            <Link href='/'>
            <a>Ir al Home</a>
            </Link>
        </div>
    )
}

export default index
