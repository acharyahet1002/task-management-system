import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '.'

const AdminLayout = () => {
  return (
    <Box>
      <Sidebar />
      <Box
        style={{
          // height: '200vh',
          width: 'calc(100vw - 235px)',
          float: 'right',
        }}>
        <Header />
        <Outlet />
      </Box>
    </Box>
  )
}

export default AdminLayout
