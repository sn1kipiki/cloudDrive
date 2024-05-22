import React, {useState} from 'react';
import s from './styles.module.scss'
import Input from "../../components/Input/Inpun";
import { registration, login } from '../../actions/user'
import {useDispatch} from "react-redux"
import logoImg from '../../assets/img/logo.svg'
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  const InputStyles={
    root: {marginBottom: "10px"},
    input: {backgroundColor: "#313239",
    color: '#fff'},
    label: { color: '#fff' },
}

function AuthPage(props) {
    const [isLogin, setIsLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    return (
        // <div className={s.page}>
        //     <img src={s.logo} alt=""/>
        //     <div className={s.form}>
        //         <div className={s.topline}>
        //             <p className={s.name}>{isLogin? "Login": "Registration"}</p>
        //             <button className={s.smalltext} onClick={()=> setIsLogin(!isLogin) }>
        //                 {isLogin? `Dont have an account? `
        //                     : `Create an account or `
        //                 }<span>{isLogin? `Sign Up`
        //                 : `log in`
        //                 }</span>

        //             </button>
        //         </div>
        //         <div className={s.main}>
        //             {
        //                 isLogin?
        //                 <>          
        //                 <Input value={email} setValue={setEmail} type="email"/>
        //                 <Input value={password} setValue={setPassword}type="password"/>
        //                 <button className={s.authbutton} onClick={()=> dispatch(login(email, password))}>LOGIN</button>
        //                 </>
        //                 :
        //                 <>           
        //                 <Input value={email} setValue={setEmail} type="email"/>
        //                 <Input value={username} setValue={setUsername} type="text"/>
        //                 <Input value={password} setValue={setPassword}type="password"/>
        //                 <button className={s.authbutton} onClick={()=> registration(email, username, password)}>REG</button>
        //                 </>

        //             }
        //             <button className={s.authbutton} onClick={()=> registration(email, username, password)}></button>
        //         </div>
        //     </div>
        // </div>
        <div className={s.page}>

        {isLogin ?
            
            <Container  my={40} style={{display:"flex", alignItems:"center", flexDirection:"column" }}>
                <img src={logoImg}  />
                <Title ta="center" className={s.title}>
                    Welcome back!
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Do not have an account yet?{' '}
                    <Anchor size="sm" component="button" onClick={()=> setIsLogin(!isLogin) }>
                    Create account
                    </Anchor>
                </Text>

                <Paper  className={s.paper}
                withBorder shadow="md" miw={350} p={30} mt={30} radius="md">
                    <TextInput styles={{...InputStyles}}
                        value={email} 
                        onChange={(event) => setEmail(event.currentTarget.value)} label="Email" 
                        placeholder="Enter Email" required 
                    />
                    <PasswordInput styles={{...InputStyles}}
                        value={password} 
                        onChange={(event) => setPassword(event.currentTarget.value)} 
                        label="Password" 
                        placeholder="Enter Password" 
                        required mt="md" 
                    />
                    <Group justify="space-between" mt="lg">
                    <Anchor component="button" size="sm">
                        Forgot password?
                    </Anchor>
                    </Group>
                    <Button fullWidth mt="xl" 
                        onClick={()=> dispatch(login(email, password))}>
                        Log in
                    </Button>
                </Paper>
            </Container>
        :
            <Container style={{display:"flex", alignItems:"center", flexDirection:"column" }} my={40}>
                <img src={logoImg}  />
                <Title ta="center" className={s.title}>
                    Welcome to Cloudy!
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Have an account yet?{' '}
                    <Anchor size="sm" component="button" onClick={()=> setIsLogin(!isLogin) }>
                    Log In
                    </Anchor>
                </Text>

                <Paper className={s.paper} withBorder shadow="md" miw={350} p={30} mt={30} radius="md">
                    <TextInput styles={{...InputStyles}}
                        value={email} 
                        onChange={(event) => setEmail(event.currentTarget.value)}  label="Email"
                        placeholder="Enter Email" required 
                    />
                    <TextInput  styles={{...InputStyles}}
                        value={username} 
                        onChange={(event) => setUsername(event.currentTarget.value)}  
                        label="Username" 
                        placeholder="Enter Username" required 
                    />
                    <PasswordInput styles={{...InputStyles}}
                        value={password} 
                        onChange={(event) => setPassword(event.currentTarget.value)} 
                        label="Password" 
                        placeholder="Enter password" required mt="md" 
                    />
                    <Group justify="space-between" mt="lg">
                    </Group>
                    <Button fullWidth mt="xl" onClick={()=> registration(email, username, password)}>
                        Sign in
                    </Button>
                </Paper>
            </Container>
        }
        </div>
    );
}

export default AuthPage;