import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './style'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmt = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form onSubmit={handleSubmt}>
        <Title>{title}</Title>
        {/* eslint-disable-next-line react/jsx-handler-names */}
        <Input placeholder='Email' disabled={disabled} value={email.value} onChange={email.onChange} />
        {/* eslint-disable-next-line react/jsx-handler-names */}
        <Input placeholder='Password' type='password' disabled={disabled} value={password.value} onChange={password.onChange} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
