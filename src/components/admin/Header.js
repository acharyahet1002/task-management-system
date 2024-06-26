import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: '1rem',
        borderBottom: '1px solid',
        borderBottomColor: 'sidebar.main',
      }}>
      <Typography variant='h6' sx={{ marginLeft: '16px' }}>
        Hello, username
      </Typography>
      <IconButton
        disableRipple
        sx={{
          padding: '0',
          display: 'flex',
          columnGap: '1rem',
          marginRight: '16px',
        }}
        onClick={(e) => {
          if (open) {
            handleClose()
          } else {
            handleOpen(e)
          }
        }}>
        <Box
          sx={{
            height: '2.5rem',
            width: '2.5rem',
            margin: '0.5rem 0',
            borderRadius: '50%',
            backgroundColor: '#ddd',
          }}></Box>
        {!open ? <ArrowDropDown /> : <ArrowDropUp />}
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}

export default Header
