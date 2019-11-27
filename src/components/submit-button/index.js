import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ title, disabled, onCLick }) => (
  <Button disabled={disabled} onClick={onCLick}>{title}</Button>
)
