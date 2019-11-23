import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/user-form'
import { RegisterMutation } from '../container/regiser-mutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }
                  const errorMsg = error && 'El usuario ya existe o hay algún problema'
                  return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title='Registrarse' />
                }
              }
            </RegisterMutation>

            <UserForm onSubmit={activateAuth} title='Iniciar Sesión' />
          </>
        )
      }
    }
  </Context.Consumer>
)
