import styled from 'styled-components';

export const NavbarComponent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: var(--color-background-content);
    height:100%;
    padding: 1rem;
    margin-right: 0.1rem;

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
    }
`