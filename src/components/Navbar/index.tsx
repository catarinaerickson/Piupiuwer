import React, {ButtonHTMLAttributes, useCallback} from 'react';
import { useAuth } from '../../hooks/auth';

import { ArrowButtonComponent, NavbarComponent } from './styles';
import { LogoutComponent } from './styles';

import logoImg from '../../assets/images/logo.svg';
import homeIcon from '../../assets/images/home.svg';
import hashIcon from '../../assets/images/hash.svg';
import bellIcon from '../../assets/images/bell.svg';
import messageIcon from '../../assets/images/mail.svg';
import markerIcon from '../../assets/images/bookmark.svg';
import listIcon from '../../assets/images/list.svg';
import profileIcon from '../../assets/images/person.svg';
import LogoutIcon from '../../assets/images/logout.svg';
import arrowIcon from '../../assets/images/arrowleft.svg';

interface navbarProps {
    displayNavbar: boolean;
    hideNavbar(): void;
}

interface arrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    hideNavbar(): void;
}

const ArrowButton: React.FC<arrowProps> = ({hideNavbar, ...rest}) => {
    return (
        <ArrowButtonComponent onClick={hideNavbar} {...rest}>
            <img src={ arrowIcon } alt="escoder navbar"/>
        </ArrowButtonComponent>
    )
}


const Navbar: React.FC<navbarProps> = ({displayNavbar, hideNavbar}) => {
    const { logout } = useAuth();

    const handleLogout = useCallback(() => {
        logout();
    }, [logout])

    const {user}: any = useAuth();

    return (
        <NavbarComponent displayNavbar={displayNavbar}>
            <div className="navbar-logo">
                <img src={ logoImg } alt="Pipiuwer"/>
                <ArrowButton hideNavbar={hideNavbar}/>
            </div>

            <div className="navbar-item">
                <img src={ homeIcon } alt="Home"/>
                <p>Início</p>
            </div>

            <div className="navbar-item">
                <img src={ hashIcon } alt="Explore"/>
                <p>Explorar</p>
            </div>

            <div className="navbar-item">
                <img src={ bellIcon } alt="Notificações"/>
                <p>Notificações</p>
            </div>

            <div className="navbar-item">
                <img src={ messageIcon } alt="Mensagens"/>
                <p>Mensagens</p>
            </div>

            <div className="navbar-item">
                <img src={ markerIcon } alt="Marcadores"/>
                <p>Marcadores</p>
            </div>

            <div className="navbar-item">
                <img src={ listIcon } alt="Listas"/>
                <p>Listas</p>
            </div>

            <div className="navbar-item">
                <img src={ profileIcon } alt="Perfil"/>
                <p>Perfil</p>
            </div>

            <div className="navbar-logout">
                <img src={user.foto} alt="Foto de Perfil"/>
                <p>@{user.username}</p>
                <LogoutComponent onClick = {handleLogout}>
                    <img src={LogoutIcon} alt="Sair"/>
                </LogoutComponent>
            </div>

        </NavbarComponent>
    )
}

export default Navbar;