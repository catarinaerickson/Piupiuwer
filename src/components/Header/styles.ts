import styled from 'styled-components';

export const HeaderComponent = styled.header `
    width:100%;
    padding: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-background-content);

    div {
        display: flex;
        align-items: center;
    }

    div h1 {
        font: 700 2.5rem Archivo;
        color: var(--color-text-title)
    }

    img {
        height: 3rem;
    }

`

export const NavbarButtonComponent = styled.button `
    display: none;
    @media (max-width: 500px) {
        border: 0;
        background: var(--color-background-content);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;

        img {
            height: 3rem;
            width: 1rem;
        }
    }

`