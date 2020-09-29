import styled, { css } from 'styled-components';


interface PiuProps {
    disappear: boolean,
    transition: boolean
}

export const PiuComponent = styled.section<PiuProps> `
    display: flex;
    align-items: flex-start;
    background: var(--color-background-content);
    padding: 1.5rem;
    margin-top: 0.1rem;
    transition: opacity 1s;
    
    ${props =>
        props.disappear &&
        css`
            display: none;
        `
    };

    ${props =>
        props.transition &&
        css`
            opacity: 0;
        `
    };
    
    .piu-foto {
       margin-right: 1rem;
       display: flex;
       align-items:center;
       justify-content: center;
       border-radius: 3rem;
       overflow-x: hidden;
       overflow-y:hidden;
       width: 6rem;
       height: 6rem; 
       background: url('../../assets/images/piupic.png');
    }

    .piu-foto img {
       height: 6rem;
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
    }    

    .piu-block .piu-react .icon img {
        height: 2rem;
        margin-right: 1rem;
    }    

    .piu-block .piu-react .icon p {
        font: 500 1.5rem Archivo;
        color: var(--color-input-content);
    }

    .delete-button {
        display: flex;
        justify-content: flex-end;    
    }

`

export const ReactionButtonComponent = styled.button `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    cursor: pointer;
    background: var(--color-background-content);

    img {
        height: 2rem;
        margin-right: 1rem;
    }

    p {
        font: 500 1.5rem Archivo;
        color: var(--color-input-content);
    }
`

interface DeletePiuProps {
    displayDelete: boolean;
}

export const DeletePiuComponent = styled.button<DeletePiuProps> `
    border: 0;
    display: flex;
    justify-content:center;
    align-items: center;
    background: var(--color-background-content);
    cursor: pointer;
    
    img {
        display: none;
        height: 2rem;
    }
    
    ${props =>
	    props.displayDelete &&
	    css`
            img {
                display: block;
            }
	    `};

`