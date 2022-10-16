import React from 'react'
import { Nexphoto, GreyLogo, ArrowRight } from '../../assets'
import { Button } from '../../components/Button/Button'
import { InputText } from '../../components/InputText/InputText'
import { TitleText } from '../../components/TitleText/TitleText'
import './LoginView.css'

const styles = {
  fontSizeBig: '36px',
  fontSizeNormal: '16px',
  purple: '#4C5980',
  yellow: '#FFD175',
  black: '#323133',
  bold: '800',
}

const LoginView = () => {

  return (
    <div className='login-view'>
      <div id='login-content' style={{ backgroundColor: '#D6D6D6' }}>
        <GreyLogo className='grey-logo' />
        <TitleText
          fontSize={styles.fontSizeBig}
          fontColor={styles.purple}
          fontWeight={styles.bold}
          lineHeight='38px'>ENTRAR</TitleText>
        <span>Utilize seu e-mail e senha cadastrados para acessar a plataforma.</span>
        <div className='text-fields'>
          <label className='label-input'>Login</label>
          <InputText height='40px' width='309px' fontSizeInput={styles.fontSizeNormal} inputRadius='50px' paddingInput='20px' type='text' />
          <label className='label-input' style={{ marginTop: '23px' }}>Senha</label>
          <InputText height='40px' width='309px' fontSizeInput={styles.fontSizeNormal} inputRadius='50px' paddingInput='20px' type='password' />
        </div>
        <Button className='button-login-view' bgColor={styles.yellow} btnHeight='40px' btnWidth='309px' textColor={styles.black} fontSize={styles.fontSizeNormal} btnRadius='50px' btnWeight='700' style={{ marginTop: '35px' }}>ENTRAR <ArrowRight style={{ marginBottom: '2px', marginLeft: '8px' }} /></Button>
        <a href="google.com" className='forgot-password'>Esqueci minha senha</a>
        <Button className='button-login-view' btnHeight='40px' btnWidth='309px' textColor={styles.purple} fontSize={styles.fontSizeNormal} btnRadius='50px' btnWeight='700' btnBorder='solid 2px' borderColor={styles.purple} style={{ marginTop: '20px' }}>CADASTRE-SE</Button>
      </div>
      <div id='background-logo'>
        <Nexphoto />
      </div>
    </div>
  )
}

export default LoginView