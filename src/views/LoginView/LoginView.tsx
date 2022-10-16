import React from 'react'
import { Nexphoto, GreyLogo, ArrowRight } from '../../assets'
import { Button } from '../../components/Button/Button'
import { InputText } from '../../components/InputText/InputText'
import { TitleText } from '../../components/TitleText/TitleText'
import backgroundImage from '../../assets/images/background-nex.png';
import './LoginView.css'

const styles = {
  fontSizeBig: '36px',
  fontSizeMobile: '24px',
  fontSizeNormal: '16px',
  sizeInputDesktop: '309px',
  sizeInputMobile: '245px',
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
          className='title-h1'
          fontSize={window.window.innerWidth < 1000 ? styles.fontSizeMobile : styles.fontSizeBig}
          fontColor={styles.purple}
          fontWeight={styles.bold}
          lineHeight='38px'>ENTRAR</TitleText>
        <span>Utilize seu e-mail e senha cadastrados para acessar a plataforma.</span>
        <div className='text-fields'>
          <label className='label-input'>Login</label>
          <InputText height='40px' width={window.window.innerWidth < 1000 ? styles.sizeInputMobile : styles.sizeInputDesktop} fontSizeInput={styles.fontSizeNormal} inputRadius='50px' paddingInput='20px' type='text' />
          <label className='label-input' style={{ marginTop: '23px' }}>Senha</label>
          <InputText height='40px' width={window.window.innerWidth < 1000 ? styles.sizeInputMobile : styles.sizeInputDesktop} fontSizeInput={styles.fontSizeNormal} inputRadius='50px' paddingInput='20px' type='password' />
        </div>
        <Button className='button-login-view enter' bgColor={styles.yellow} btnHeight='40px' btnWidth={window.window.innerWidth < 1000 ? styles.sizeInputMobile : styles.sizeInputDesktop} textColor={styles.black} fontSize={styles.fontSizeNormal} btnRadius='50px' btnWeight='700' style={{ marginTop: '35px' }}>ENTRAR <ArrowRight style={{ marginBottom: '2px', marginLeft: '8px' }} /></Button>
        <a href="google.com" className='forgot-password'>Esqueci minha senha</a>
        <Button className='button-login-view sign-up' btnHeight='40px' btnWidth={window.window.innerWidth < 1000 ? styles.sizeInputMobile : styles.sizeInputDesktop} textColor={styles.purple} fontSize={styles.fontSizeNormal} btnRadius='50px' btnWeight='700' btnBorder='solid 2px' borderColor={styles.purple} style={{ marginTop: '20px' }}>CADASTRE-SE</Button>
      </div>
      <div id='background-logo'>
        <img className='background-image' src={backgroundImage} alt="background-logo" />
      </div>
    </div>
  )
}

export default LoginView