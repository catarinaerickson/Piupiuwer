import styled from 'styled-components';

export const PageFeed = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    main {
        width: 100%;
        display:flex;
        flex-direction:column;
    }

    main .input-block {
        background: var(--color-background-content);
        border: none;
        margin: 0.1rem 0;
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 2rem 2rem 0rem 2rem;

    }

    main .input-block > img {
        width: 7rem;
    }

    main .input-block section {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }

    main .input-block section textarea {
        border: none;
        resize: vertical;
        min-height: 4rem;
        font: 500 2.2rem Archivo;
    }

    main .input-block section .options {
        display: flex;
        align-items: center;
        margin-top: 2rem;
    }

    main .input-block section .options .options-bar{
        display: flex;
        margin-right: 2rem;
    }

    main .input-block section .options .options-bar img{
        margin: 0 1rem;
    }

    

`