import React from 'react'
import './button.css'

type ButtonProps = {
  buttonText: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  return <button className="my-button">{props.buttonText}</button>
}
