import React from 'react';

import { NavbarComponent } from './styles';

import logoImg from '../../assets/images/logo.svg';
import homeIcon from '../../assets/images/home.svg';
import hashIcon from '../../assets/images/hash.svg';
import bellIcon from '../../assets/images/bell.svg';
import messageIcon from '../../assets/images/mail.svg';
import markerIcon from '../../assets/images/bookmark.svg';
import listIcon from '../../assets/images/list.svg';
import profileIcon from '../../assets/images/person.svg';

const Navbar: React.FC = () => {
    return (
        <NavbarComponent>
            <div className="navbar-logo">
                <img src={ logoImg } alt="Pipiuwer"/>
            </div>

            <div className="navbar-item">
                <img src={ homeIcon } alt="Home"/>
            </div>

            <div className="navbar-item">
                <img src={ hashIcon } alt="Explore"/>
            </div>

            <div className="navbar-item">
                <img src={ bellIcon } alt="Notificações"/>
            </div>

            <div className="navbar-item">
                <img src={ messageIcon } alt="Mensagens"/>
            </div>

            <div className="navbar-item">
                <img src={ markerIcon } alt="Marcadores"/>
            </div>

            <div className="navbar-item">
                <img src={ listIcon } alt="Listas"/>
            </div>

            <div className="navbar-item">
                <img src={ profileIcon } alt="Perfil"/>
            </div>

        </NavbarComponent>
    )
}

export default Navbar;