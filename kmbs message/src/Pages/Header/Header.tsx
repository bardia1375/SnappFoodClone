import React from 'react'
import Navbar from './Navbar/Navbar'

type Props = {}

function Header({}: Props) {
  return (
    <div className='border-2 border-red-500'><Navbar/></div>
  )
}

export default Header