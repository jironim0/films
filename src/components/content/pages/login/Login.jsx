import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth, selectIsAuth } from '../../../../redux/slices/authSlice'

import styles from './Login.module.scss'

export const Login = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '123test@test.com',
      password: '12345',
    },
    mode: 'onChange'
  })

  const onSubmit = (values) => {
    dispatch(fetchAuth(values))
  }

  console.log(isAuth)

  return (
    <div className={styles.login__wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email', {required: 'Укажите почту'})} placeholder='You Email...'></input>
        <input {...register('password', {required: 'Укажите пароль'})} placeholder='You Password'></input>
        <button type = 'submit'>Send</button>
      </form>
    </div>
  )
}
