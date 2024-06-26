import {
  AccountTree,
  Drafts,
  Group,
  Groups,
  Leaderboard,
} from '@mui/icons-material'
import { Box, List, Typography } from '@mui/material'
import React from 'react'
import { SideBarNavLink } from '../common'

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'sidebar.dark',
        height: '100%',
        width: '235px',
        position: 'fixed',
        zIndex: 1,
        top: 0,
        left: 0,
      }}>
      <Box
        sx={{
          padding: '16px 0',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '16px',
        }}>
        <Typography
          variant='body1'
          textAlign={'center'}
          sx={{ color: 'text.contrastText' }}>
          TaskManage
        </Typography>
        <List
          sx={{
            padding: '0',
          }}>
          <SideBarNavLink
            to={'/admin/dashboard'}
            icon={<AccountTree />}
            label={'Dashboard'}
          />
          <SideBarNavLink
            to={'/admin/users'}
            icon={<Group />}
            label={'Users'}
          />
          <SideBarNavLink
            to={'/admin/users'}
            icon={<Leaderboard />}
            label={'Projects'}
          />
          <SideBarNavLink
            to={'/admin/teams'}
            icon={<Groups />}
            label={'Teams'}
          />
          <SideBarNavLink
            to={'/admin/roles'}
            icon={<Drafts />}
            label={'Roles'}
          />
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
