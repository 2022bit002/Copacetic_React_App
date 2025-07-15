import React, { Children } from 'react'

export default function Layout(props) {

    const {children} = props


  return (
    <>
        <header>
            <h1 className='text-gradient'>COPACETIC</h1>
        </header>
        <main>{children}</main>
        
        <footer>
            <small>Created by</small>
            <a target="_blank" href='https://github.com/2022bit002/'>
            <img src="https://media.licdn.com/dms/image/v2/D5603AQGa7fp-sjwZZg/profile-displayphoto-shrink_400_400/B56ZbPGdLCH4Ag-/0/1747231299546?e=1757548800&v=beta&t=7rPbrGHmptx-NGqegk5VY_81dqw_J1YkaiFofStaiDY" alt="picCreator" /><p>@2022bit002</p>
            <i className="fa-brands fa-github"></i>
            </a>
            
        </footer>
    </>
  )
}
