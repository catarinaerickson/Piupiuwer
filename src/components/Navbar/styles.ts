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

    .navbar-item img {
        height: 3rem;
    }
`