import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './style'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmt = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmt}>
        {/* eslint-disable-next-line react/jsx-handler-names */}
        <Input placeholder='Email' value={email.value} onChange={email.onChange} />
        {/* eslint-disable-next-line react/jsx-handler-names */}
        <Input placeholder='Password' type='password' value={password.value} onChange={password.onChange} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
