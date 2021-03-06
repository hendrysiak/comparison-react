import React from 'react'
import { ReactComponent as ButtonIcon } from '../assets/button-icon.svg'

interface Props {
  onClickHandler: () => void;
  content: string
  isSubmit?: boolean
}

const Button = (props: Props) => {
  return (
    <button type={props.isSubmit ? 'submit' : 'button'} className="warranty__button b1" onClick={() => props.onClickHandler()}><p>{props.content}</p> <ButtonIcon /></button>
  )
}

export default Button
