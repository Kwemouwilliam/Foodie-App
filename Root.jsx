import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './src/Components/Navbar'


export default function Root() {
  return (
    <>
         <Navbar />
         <Outlet />
    </>
  )
}