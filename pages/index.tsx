import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link';
//typescrit se definen los tipos de cada variable
// tiene varios tipos que en esta caso es NextPage

const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
      <p>Pagina de Index</p>

      <Link href='/admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin Usuarios</a>
      </Link>
      
    </div>
  )
}

export default Home
