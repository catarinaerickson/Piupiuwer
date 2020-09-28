import styled from 'styled-components';

export const NavbarComponent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: var(--color-background-content);
    height:100%;
    width: 20vw;
    padding: 1rem;
    margin-right: 0.1rem;
    position: fixed;
    left: 0;
    
   
    .navbar-logo {
        margin-bottom: 3rem;
    }

    .navbar-logo img {
        height: 5rem;
    }

    .navbar-item {
        padding: 1.5rem;  
        border-radius: 50%;
        &:hover {
            background: var(--color-primary-opacity);
        }
    }

    .navbar-item p {
        display: none;
    }

    .navbar-item img {
        height: 3rem;
    }

    .navbar-logout {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 2rem;
    }

    .navbar-logout > img {
        width: 4rem;
        display: none;
        border-radius: 50%;
    }

    .navbar-logout p {
        font: 500 1.2rem POppins;
        color: var(--color-input-text);
        margin-left: 0.5rem;
        display: none;
    }

    @media (max-width: 500px) {
        display: none;
    }

    @media (min-width: 850px) {
        align-items: flex-start;

        .navbar-item {
            display: flex;
            align-items: center;
            border-radius: 3rem;
        }

        .navbar-item img {
            margin-right: 1rem;
        }

        .navbar-item p{
            display: block;
            font: 700 2.0rem Archivo;
            color: var(--color-text-title);
        }

        .navbar-logout {
            justify-content: flex-start;
        }

        .navbar-logout img {
            display: block;
        }

        .navbar-logout p {
            display: block;
        }
    }

    
`
export const LogoutComponent = styled.button `
    border: 0;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 3rem;
    background: var(--color-background-content);
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background: var(--color-primary-opacity);
    }

    img{
        height: 3rem;
    }
`