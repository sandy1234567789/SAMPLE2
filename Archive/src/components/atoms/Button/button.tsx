import React from 'react'
import './button.css'

export type ButtonProps = {
  buttonText: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  return <button className="my-button">{props.buttonText}</button>
}