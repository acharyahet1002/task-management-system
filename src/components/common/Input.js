import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

const Input = ({
  name,
  label,
  control,
  errorMsg,
  variant,
  disabled,
  handleChange = () => null,
  fullWidth = true,
  defaultValue = '',
  type,
  ...rest
}) => {
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            name={name}
            label={label}
            onChange={(e) => {
              onChange(e)
              if (handleChange) {
                handleChange()
              }
            }}
            error={Boolean(errorMsg)}
            value={value}
            variant={variant}
            disabled={disabled}
            fullWidth={fullWidth}
            type={type}
            {...rest}
          />
        )}
      />
      {errorMsg && (
        <FormHelperText error={true}>
          <Typography variant='overline'>{errorMsg}</Typography>
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default Input
