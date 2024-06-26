import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Login } from '../common'

const User = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/home'} element={<Home />} />
    </Routes>
  )
}

export default User
