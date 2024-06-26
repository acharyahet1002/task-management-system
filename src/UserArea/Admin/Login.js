import { Box, IconButton, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Input, SubmitBtn } from '../../components/common'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import requiredFieldMessage from '../../helpers/FormErrorMessages/requiredFieldMessage'
import typeValidationMessage from '../../helpers/FormErrorMessages/typeValidationMessage'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const changeVisiblity = () => {
    setShowPassword(!showPassword)
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(typeValidationMessage('Email'))
      .required(requiredFieldMessage('Email')),
    password: yup.string().required(requiredFieldMessage('Password')),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    console.log(data, 'test')
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        backgroundColor: '#fff',
      }}>
      <Box
        sx={{
          flexBasis: '70%',
          backgroundColor: 'sidebar.dark',
        }}></Box>
      <Box sx={{ flexBasis: '30%' }}>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto 80px',
            rowGap: '32px',
          }}>
          <Typography
            variant='h2'
            textAlign={'center'}
            sx={{ color: 'sidebar.main' }}>
            LOGIN
          </Typography>
          <Input
            name='email'
            label={'Email'}
            color={'input'}
            errorMsg={errors?.email?.message}
            control={control}
            placeholder={'Enter Email'}
            variant={'outlined'}
          />
          <Input
            name='password'
            variant={'outlined'}
            control={control}
            label={'Password'}
            errorMsg={errors?.password?.message}
            type={showPassword ? 'text' : 'password'}
            placeholder={'Enter Password'}
            color={'input'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={changeVisiblity}
                    color={errors?.password ? 'error' : 'button'}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <SubmitBtn title={'Login'} variant='outlined' color='sidebar' />
        </Box>
      </Box>
    </Box>
  )
}

export default Login
