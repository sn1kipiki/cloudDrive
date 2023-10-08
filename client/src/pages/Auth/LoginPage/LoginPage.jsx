import React, { useState } from 'react'
import "../styles.scss"
import emailImg from "../../../assets/icons/email.svg"
import passwordImg from "../../../assets/icons/password.svg"
import logoImg from '../../../assets/icons/Logo.png'
import Input from '../../../components/UI/formInput/Input'
import {useDispatch} from "react-redux"
import { login } from '../../../actions/user'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

  return (
    <div className='auth'>
         <div className='auth-form'>
         <img src={logoImg} alt="logo" className='auth-form__logo'/>
          <Input value={email} onChangeHandler={setEmail} text={"Email"} iconImg={emailImg}/>
         <Input value={password} onChangeHandler={setPassword} text={"Password"} iconImg={passwordImg}/>
         <button className='authButton' onClick={()=> dispatch(login(email, password))}>Log In</button>
         
        </div>
    </div>
  )
}

export default LoginPage