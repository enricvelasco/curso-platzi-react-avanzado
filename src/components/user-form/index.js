import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <form onSubmit={onSubmit}>
      {/* eslint-disable-next-line react/jsx-handler-names */}
      <input placeholder='Email' value={email.value} onChange={email.onChange} />
      {/* eslint-disable-next-line react/jsx-handler-names */}
      <input placeholder='Password' type='password' value={password.value} onChange={password.onChange} />
      <button>Iniciar Sesión</button>
    </form>
  )
}
