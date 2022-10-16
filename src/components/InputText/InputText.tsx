import styled from 'styled-components';

type InputProps = {
  inputRadius?: string,
  height: string,
  width: string,
  fontSizeInput: string,
  fontWeight?: string,
  textColor?: string,
  paddingInput?: string,
}

export const InputText = styled.input<InputProps>`
  font-family: Montserrat;
  font-size: ${(props) => props.fontSizeInput};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.textColor};
  padding: ${(props) => props.paddingInput};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.inputRadius};
  width: ${(props) => props.width};
  border: none
`