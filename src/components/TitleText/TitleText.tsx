import styled from 'styled-components';

type TitleTextProps = {
  fontSize: string,
  fontColor?: string,
  lineHeight?: string,
  fontWeight?: string
}

export const TitleText = styled.h1<TitleTextProps>`
  font-family: Montserrat;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
`