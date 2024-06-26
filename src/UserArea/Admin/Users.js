import { Box, Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const Users = () => {
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ]

  const columns = [
    { field: 'col1', headerName: 'Column 1', flex: 1 },
    { field: 'col2', headerName: 'Column 2', flex: 1 },
  ]

  return (
    <Box sx={{ margin: '0rem 2rem ' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Typography variant='h3' sx={{ margin: '2rem 0' }}>
          USERS
        </Typography>
        <Button variant='contained' disableElevation color='button'>
          ADD USERS
        </Button>
      </Box>

      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        loading={false}
        // sx={{
        //   '.MuiDataGrid-columnHeader ': {
        //     backgroundColor: 'sidebar.dark',
        //   },
        //   '.MuiDataGrid-footerContainer': {
        //     borderColor: 'sidebar.dark',
        //   },
        //   '.MuiDataGrid-autoHeight': {
        //     borderColor: '#000 !important',
        //   },
        //   '.MuiDataGrid-iconButtonContainer > button': {
        //     color: 'text.contrastText',
        //   },
        //   '.MuiDataGrid-menuIcon > *': {
        //     color: 'text.contrastText',
        //   },
        //   '.MuiDataGrid-columnHeaderTitle': {
        //     color: 'text.contrastText',
        //   },
        // }}
      />
    </Box>
  )
}

export default Users
