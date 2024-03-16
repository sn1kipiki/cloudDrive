import React, {useState} from 'react';
import s from './styles.module.scss'
import Input from "../../components/Input/Inpun";
import { registration, login } from '../../actions/user'
import {useDispatch} from "react-redux"

function AuthPage(props) {
    const [isLogin, setIsLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    return (
        <div className={s.page}>
            <img src={s.logo} alt=""/>
            <div className={s.form}>
                <div className={s.topline}>
                    <p className={s.name}>{isLogin? "Login": "Registration"}</p>
                    <button className={s.smalltext} onClick={()=> setIsLogin(!isLogin) }>
                        {isLogin? `Dont have an account? `
                            : `Create an account or `
                        }<span>{isLogin? `Sign Up`
                        : `log in`
                        }</span>

                    </button>
                </div>
                <div className={s.main}>
                    {
                        isLogin?
                        <>          
                        <Input value={email} setValue={setEmail} type="email"/>
                        <Input value={password} setValue={setPassword}type="password"/>
                        <button className={s.authbutton} onClick={()=> dispatch(login(email, password))}>LOGIN</button>
                        </>
                        :
                        <>           
                        <Input value={email} setValue={setEmail} type="email"/>
                        <Input value={username} setValue={setUsername} type="text"/>
                        <Input value={password} setValue={setPassword}type="password"/>
                        <button className={s.authbutton} onClick={()=> registration(email, username, password)}>REG</button>
                        </>

                    }
                    <button className={s.authbutton} onClick={()=> registration(email, username, password)}></button>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;