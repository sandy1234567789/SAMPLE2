import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { Button } from './button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta


export const Default = () => {
  return <Button buttonText="Hello" />
}
