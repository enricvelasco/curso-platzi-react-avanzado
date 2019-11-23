import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/user-form'
import { RegisterMutation } from '../container/regiser-mutation'
import { LoginMutation } from '../container/login-mutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }
            const errorMsg = error && 'El usuario ya existe o hay algún problema'
            return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'
            return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title='Iniciar Sesión' />
          }
        }
      </LoginMutation>
    </>
  )
}

