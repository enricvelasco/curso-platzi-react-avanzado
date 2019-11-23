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
                (register) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }
                  return <UserForm onSubmit={onSubmit} title='Registrarse' />
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
