import React, { FormEvent, useCallback, useState} from 'react';

import { PageLogin } from './styles';
import logoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';


function Login() {

    const [user, setUser] = useState({
        username:'',
        password:''
    });

    const [errMessage, setErrMessage] = useState({message: ''});

    const { login } = useAuth();
    
    const handleLogin = useCallback (async (e: FormEvent) => {
        e.preventDefault();
        const err = await login(user); 

        if (err != null) {
            setErrMessage({message: err});
        }        
        
        setUser({username: '', password: ''});

    }, [user, login, setErrMessage]);
    
    
    
    return (

        <PageLogin>

            <div id="page-login-content">
                <img src={ logoImg } alt="Pipiuwer"/>
                <h1>Entrar no Piupiuwer</h1>  

                <div className="err-message">
                    <p>{errMessage.message}</p>
                </div>

                <form onSubmit={handleLogin}>
                    <Input
                        name='username'
                        label='Nome de usuário'
                        type='text'
                        value={user.username}
                        onChange={(e) => {setUser({username: e.target.value, password: user.password})}}
                    />  
                    <Input
                        name='password'
                        label='Senha'
                        type='password'
                        value={user.password}
                        onChange={(e) => {setUser({username: user.username, password: e.target.value})}}
                    />
                    <Button 
                        title='Entrar'
                        isSmall={ false }
                    />
                </form>

                <div className="links">
                    <a href='#'>Esqueceu sua senha?</a> 
                    <div className="dot"></div>
                    <a href='#'>Increver-se no Piupiuwer</a>
                </div>
            </div>

        </PageLogin>
    )
}

export default Login;