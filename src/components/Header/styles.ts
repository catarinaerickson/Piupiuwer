import styled from 'styled-components';

export const HeaderComponent = styled.header `
    width:100%;
    padding: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-background-content);

    h1 {
        font: 700 2.5rem Archivo;
        color: var(--color-text-title)
    }

    img {
        height: 3rem;
    }

`