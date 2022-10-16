import styled from 'styled-components';

type ButtonProps = {
  bgColor?: string,
  btnHeight: string,
  btnWidth: string,
  textColor: string,
  btnBorder?: string,
  btnRadius?: string,
  fontSize: string,
  btnWeight?: string,
  borderColor?: string
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor}; 
  height: ${(props) => props.btnHeight}; 
  width: ${(props) => props.btnWidth};
  font-family: Montserrat; 
  font-weight: ${(props) => props.btnWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.textColor};
  border: ${(props) => props.btnBorder};
  border-radius: ${(props) => props.btnRadius};
  border-color: ${(props) => props.borderColor};
`;