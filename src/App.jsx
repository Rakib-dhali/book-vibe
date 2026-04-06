import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div className='w-full max-w-292.5 mx-auto'>
    <Nav/>
    <Outlet/>
    </div>
  )
}

export default App