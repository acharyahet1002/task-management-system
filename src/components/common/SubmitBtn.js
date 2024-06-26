import { Button, Typography } from '@mui/material'
import React from 'react'

const SubmitBtn = ({ title, fullWidth = true, ...rest }) => {
  return (
    <Button type='submit' fullWidth={fullWidth} {...rest}>
      <Typography variant='button'>{title}</Typography>
    </Button>
  )
}

export default SubmitBtn
