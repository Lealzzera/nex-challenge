import React from 'react'

type Props = {
  textButton: string,
  classeButton?: string,
  estiloBotao: {}
  buttonFunction: () => {}
}

const Button = ({ textButton, classeButton, buttonFunction, estiloBotao }: Props) => {
  return (
    <button className={classeButton} style={estiloBotao} onClick={buttonFunction}>{textButton}</button>
  )
}

export default Button