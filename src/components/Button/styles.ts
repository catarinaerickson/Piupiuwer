import styled, { css } from 'styled-components';

interface ButtonProps {
    isSmall: boolean;
}

export const ButtonComponent = styled.button<ButtonProps> `
    background: var(--color-primary-dark);
    width: 100%;
    height: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 700 2.2rem Archivo;
    color: var(--color-title-in-primary);
    border: 0;
    border-radius: 3rem;
    text-decoration: none;
    transition: background 0.1s;
    cursor: pointer;

    :hover {
        background:var(--color-primary-darker);
    }

    ${props =>
	    props.isSmall &&
	    css`
	      width: 50%;
          height: 4.5rem;
          font: 700 2.0rem Archivo;
          max-width: 25rem;
	    `};
`