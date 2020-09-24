import React from 'react';

import { HeaderComponent } from './styles';

import sunIcon from '../../assets/images/sun.svg';

const Header: React.FC = () => {
    return (
        <HeaderComponent>
            <h1>Início</h1>
            <img src={ sunIcon } alt="Sol"/>
        </HeaderComponent>
    )
}

export default Header;