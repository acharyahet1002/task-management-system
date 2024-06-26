import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBarNavLink = ({ icon, label, to }) => {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}>
      <ListItem
        disablePadding
        disableRipple
        sx={{ color: 'text.contrastText' }}>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'text.contrastText' }}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  )
}

export default SideBarNavLink
