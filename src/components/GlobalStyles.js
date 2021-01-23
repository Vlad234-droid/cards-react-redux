import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
       
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track{
            background-color: white;
        }
    }
    
    body{
        font-family: "Montserrat", sans-serif;
        width: 100%
    }
    a{
        text-decoration: none;
    }
    h2{
        font-size: 1rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    p{
        font-size: 1rem;
        line-height: 200%;
        color: #696969;
    }
    

`;

export default GlobalStyles;
