import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        top: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-sizing: 0 0 0 2px ${({theme}) => theme['green-500']};
    }

    body{
        background-color: ${({theme}) => theme['gray-800']};
        color: ${({theme}) => theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font: 400 1rem Roboto, sans-serif;
    }
`