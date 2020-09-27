import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 50%;

        --color-background: #F0F0F7;
        --color-background-content: #ffffff;
        --color-primary: #FFF200;
        --color-primary-dark: #FFE600;
        --color-primary-darker: RGBA(255,217,38,1);
        --color-primary-opacity: RGBA(255,242,0,0.3);
        --color-primary-fonts: RGBA(255,195,0,1);
        --color-title-in-primary: #FFFFFF;
        --color-text-in-primary: #D4C2FF;
        --color-text-title: #000000;    
        --color-input-content: RGBA(14,0,0,0.53);
        --color-input-text: RGBA(0,0,0,0.8);
        --color-err-text: #F9441D;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
        width: 100vw;
    }

    body {
        background: var(--color-background);
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    button,
    input,
    textarea {
        font: 500 1.6rem Poppins;
        color: var(--color-text-title);
        outline: 0;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 60%;
        }
    }

`;

export default GlobalStyle;