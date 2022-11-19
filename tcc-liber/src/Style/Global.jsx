import { createGlobalStyle } from "styled-components";

import fundo from '../assets/fundo.jpeg'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0; 
        outline: 0;
        box-sizing: border-box;
    }
    html,body{
        height: 100%;
        max-height: auto;
        background-image: url(${fundo}) ;
        background-size: contain;
        width: 100%;
        max-width: auto;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: arial;
        display: flex;
        
        
        input[type="file"] {
            display: none;
        }
        
    }
    html{
        font-size: 62.5%;
    }
    #root{
        height: 100%;
        max-height: auto;
        width: 100%;
        max-width: auto;
        display: flex;

        @media(min-width: 2560px){
            font-size: 2rem;
        }
 
        @media(max-width: 1440px){
            font-size: 1rem;
        }

        @media(max-width: 1024px){
            font-size: 1rem;
        }

        @media(max-width: 768px){
            font-size: 0.65rem;
        }
        @media(max-width: 320px){
            font-size: 0.65rem;
        }

    }
    .link{
        text-decoration: none;
    }
    a{
        color: #333333;
    }
    body::-webkit-scrollbar{
        width:10px;
    }
    body::-webkit-scrollbar-track{
        background:azure;
    }
    body::-webkit-scrollbar-thumb{
        background:gray;
        border-radius:20px;
        border: 3px solid azure;
    }


`;

export default GlobalStyle;

// Celular  = 600px
// Tablet  = 768px
//                  -->   width
// Laptop  = 992px
// Desktop  = 1200px