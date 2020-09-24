import React from 'react';

import { PageLogin } from './styles';
import logoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
    return (

        <PageLogin>

            <div id="page-login-content">
                <img src={ logoImg } alt="Pipiuwer"/>
                <h1>Entrar no Piupiuwer</h1>  
                <Input
                    name='username'
                    label='Nome de usuário'
                    type='text'
                />  
                <Input
                    name='password'
                    label='Senha'
                    type='password'
                />
                <Button 
                    title='Entrar'
                    isSmall={ false }
                />
                <div className="links">
                    <a >Esqueceu sua senha?</a> 
                    <div className="dot"></div>
                    <a >Increver-se no Twitter</a>
                </div>
            </div>

        </PageLogin>
    )
}

export default Login;