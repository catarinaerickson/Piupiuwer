import styled, { css } from 'styled-components';

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
        margin-left: calc(20vw + 0.1rem);
    }

    @media (max-width: 500px) {
        main {
            margin-left: 0;
        }
    }
    

`

export const InputPiuForm = styled.form `    
    background: var(--color-background-content);
    border: none;
    margin: 0.1rem 0;
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem 2rem 0rem 2rem;
    
    > img {
        width: 7rem;
        border-radius: 50%;
    }

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 1rem 1rem 1rem;
    }

    section textarea {
        border: none;
        resize: vertical;
        min-height: 4rem;
        font: 500 2.2rem Archivo;
    }


    section .options {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    section .options .options-bar{
        display: flex;
    }

    section .options .options-bar img{
        margin: 0 1rem;
    }

    @media (max-width: 360px) {
        section .options{
            justify-content: flex-end;            
        }

        section .options .options-bar {
            display: none;
        }
    }

`
interface InputErrorComponentProps {
    isRed: boolean
}
export const InputErrorComponent = styled.div<InputErrorComponentProps> `
    display: flex;
    width: 100%;
    align-items:center;
    justify-content:flex-end;
    margin-bottom: 1rem;
    color: var(--color-input-content);

    ${props =>
	    props.isRed &&
	    css`
	        color: red;
	    `};

`