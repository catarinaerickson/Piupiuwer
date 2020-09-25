import styled from 'styled-components';

export const PiuComponent = styled.section `
    display: flex;
    align-items: flex-start;
    background: var(--color-background-content);
    padding: 1.5rem;
    margin-top: 0.1rem;
    
    > img {
        width: 6rem;
        margin-right: 1rem;
    }

    .piu-block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
    }

    .piu-block .piu-user {
        display: flex;
    }

    .piu-block .piu-user strong {
        font: 700 1.8rem Archivo;
        color: var(--color-input-text);
    }

    .piu-block .piu-user p {
        font: 500 1.6rem Archivo;
        color: var(--color-input-content);
        padding-left: 1rem;
    }

    .piu-block .piu-msg {
        padding: 1.0rem 0;
    }

    .piu-block .piu-msg p {
        word-break: break-word;
        color: var(--color-text-title);
    }

    .piu-block .piu-react {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .piu-block .piu-react .icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 1.5rem;
    }    

    .piu-block .piu-react .icon img {
        height: 2rem;
    }    

    .piu-block .piu-react .icon p {
        font: 500 1.5rem Archivo;
        color: var(--color-input-content);
    }

    .piu-delete {
        display: flex;
        justify-content: flex-end;
    }

    .piu-delete img {
        height: 2rem;
    }

`