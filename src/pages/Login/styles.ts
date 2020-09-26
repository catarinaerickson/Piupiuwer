import styled from 'styled-components';

export const PageLogin = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    background: var(--color-background-content);

    #page-login-content {
        width: 80vw;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #page-login-content img {
        margin: 3rem 0;
    }

    #page-login-content h1{
        font: 700 3rem Poppins;
        margin-bottom: 3rem;
    }

    #page-login-content form{
        width: 100%;
    }

    #page-login-content .links {
        margin-top: 1.5rem;
        display: flex;
        align-items:center;
        justify-content:center;

    }

    #page-login-content .links .dot{
        width:0.2rem;
        height: 0.2rem;
        background: var(--color-input-content);
        border-radius: 50%;
        margin: 0 1rem;
    }

    #page-login-content .links a{
        text-decoration: none;
        font: 500 1.6rem Poppins;
        color: var(--color-primary-fonts);
        text-align: center;
    }

    #page-login-content .links a:hover{
        color: var(--color-primary-dark);
    }


`