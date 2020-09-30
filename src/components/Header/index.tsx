import React, { ButtonHTMLAttributes } from 'react';

import { HeaderComponent, NavbarButtonComponent } from './styles';

import sunIcon from '../../assets/images/sun.svg';
import dotsIcon from '../../assets/images/dots.svg';

interface headerProps {
    callNavbar(): void;
}

interface navbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    openNavbar(): void;
}

const NavbarButton: React.FC<navbarButtonProps> = ({openNavbar, ...rest}) => {
    return (
        <NavbarButtonComponent onClick={openNavbar} {...rest}>
            <img src={dotsIcon} alt="mostrar navbar"/>
        </NavbarButtonComponent>
    )
}

const Header: React.FC<headerProps> = ({callNavbar}) => {
    return (
        <HeaderComponent>
            <div>
                <NavbarButton openNavbar={callNavbar}/>
                <h1>Início</h1>
            </div>
            <img src={ sunIcon } alt="Sol"/>
        </HeaderComponent>
    )
}

export default Header;

