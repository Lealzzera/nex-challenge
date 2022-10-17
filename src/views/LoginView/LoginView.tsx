import React, { ChangeEvent } from 'react'
import { GreyLogo, ArrowRight, EyeShowPassword } from '../../assets'
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
  bold: 'bold',
}

const LoginView = () => {

  const [loginField, setLoginField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('')
  const [typeInputPassword, setTypeInputPassword] = React.useState<string>('password');
  const [valueError, setValueError] = React.useState('none');

  const showPassword = () => {
    if (typeInputPassword !== 'password') {
      setTypeInputPassword('password');
    } else {
      setTypeInputPassword('text');
    }
  }

  const changeLoginField = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setLoginField(target.value);
  }

  const changePasswordField = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPasswordField(target.value);
  }
  const emailAndPasswordRules = () => {
    if (loginField === '') {
      setValueError('block');
    } else if (passwordField === '') {
      setValueError('block');
    } else {
      setValueError('none');
    }
  }

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

          <InputText required onChange={changeLoginField} placeholder='seu email aqui' height='40px' width={window.window.innerWidth < 1000 ? styles.sizeInputMobile : styles.sizeInputDesktop} fontSizeInput={styles.fontSizeNormal} inputRadius='50px' paddingInput='20px' type='text' />
          <span style={{ color: '#FF0000', display: `${valueError}`, fontSize: '10px', textAlign: 'initial', position: 'absolute', marginTop: '59px', marginLeft: '-31px' }}>preencha seu login.</span>

          <label className='label-input' style={{ marginTop: '23px' }}>Senha</label>

          <InputText required onChange={changePasswordField} placeholder='**************************' height='40px' width={window.window.innerWidth < 1000 ? styles.sizeInputMobile : styles.sizeInputDesktop} fontSizeInput={styles.fontSizeNormal} inputRadius='50px' paddingInput='20px' type={typeInputPassword} /> <button onClick={showPassword} className='eye-password'><EyeShowPassword /></button>
          <span style={{ color: '#FF0000', display: `${valueError}`, fontSize: '10px', textAlign: 'initial', position: 'absolute', marginTop: '145px', marginLeft: '-31px' }}>preencha sua senha.</span>
        </div>

        <Button onClick={emailAndPasswordRules} className='button-login-view enter' bgColor={styles.yellow} btnHeight='40px' btnWidth={window.window.innerWidth < 1000 ? styles.sizeInputMobile : styles.sizeInputDesktop} textColor={styles.black} fontSize={styles.fontSizeNormal} btnRadius='50px' btnWeight='700' style={{ marginTop: '35px' }}>ENTRAR <ArrowRight style={{ marginBottom: '2px', marginLeft: '8px' }} /></Button>

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