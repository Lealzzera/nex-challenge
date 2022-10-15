import React from 'react'
import { Nexphoto } from '../../assets'
import Button from '../../components/Button/Button'

const LoginView = () => {

  const handleButton = () => {
    console.log('hello world')
    return 'oi'
  }

  return (
    <section className='flex items-center flex-col'>
      <div id='background-logo' className='bg-black w-screen flex justify-center'>
        <Nexphoto style={{ width: '92px' }} />
      </div>
      <div id='login-content' className='flex items-center flex-col justify-center' style={{ backgroundColor: '#D6D6D6' }}>
        <div id='text-content' style={{ backgroundColor: '#D6D6D6' }} className='flex justify-center flex-col items-center mt-7'>
          <h1 style={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#4C5980', fontSize: '24px' }}>Entrar</h1>
          <span className='text-center' style={{ fontFamily: 'Montserrat', color: '#4C5980', fontSize: '12px' }}>Utilize seu e-mail e senha cadastrados para acessar a plataforma.</span>
        </div>
        <div id='inputs-and-buttons-content' className='flex justify-center flex-col items-center'>
          <Button classeButton='rounded-2xl' estiloBotao={{ backgroundColor: '#FFD175', height: '33px', width: '245px', fontFamily: 'Montserrat', fontWeight: 'bold', color: '#323133' }} textButton='ENTRAR >' buttonFunction={handleButton} />
          <a href="https://www.google.com" style={{ fontFamily: 'Montserrat', color: '#4C5980', fontSize: '10px', lineHeight: '12.19px' }}>Esqueci minha senha</a>
          <Button classeButton='rounded-2xl' estiloBotao={{ height: '33px', width: '245px', fontFamily: 'Montserrat', fontWeight: 'bold', color: '#63719D', border: 'solid #63719D' }} textButton='ENTRAR >' buttonFunction={handleButton} />
        </div>
      </div>
    </section>
  )
}

export default LoginView