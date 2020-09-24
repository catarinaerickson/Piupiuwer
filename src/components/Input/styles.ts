import styled from 'styled-components';

export const InputComponent = styled.div `
    width: 100%;
    margin-bottom: 2rem;

    .input-block{
        position: relative;
    }
    
    .input-block:after{
        width: 100%;
        height: 0.2rem;
        content: '';
        background: var(--color-input-content);
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 0 0 0.8rem 0.8rem;
    }

    .input-block:focus-within::after{
        width: 100%;
        height: 0.2rem;
        content: '';
        background: var(--color-primary-dark);
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 0 0 0.8rem 0.8rem;
    }    
    

    .input-block .label-block {
        background: var(--color-primary-opacity);
        border-radius: 0.3rem 0.3rem 0 0;
        padding: 1.0rem 1.5rem 0rem 1.5rem;
        
    }
    
    .input-block .label-block {
        width: 100%;
        font: 1.7rem Archivo;
        margin: 0;
        color: var(--color-input-content);

        &:focus-within{
            color: var(--color-primary-darker);
        }
    }

    
    .input-block input {
        color: var(--color-input-text);
        background: rgb(0, 0 ,0 ,0);
        width: 100%;
        border: none;
        margin: 0;
        padding-top: 1.0rem;
        font: 500 2.3rem Archivo;
    }


`