import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { AdminLayout } from '../../components/admin'
import Users from './Users'
import Login from './Login'

const Admin = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route element={<AdminLayout />}>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/users'} element={<Users />} />
        <Route path={'/*'} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Admin
