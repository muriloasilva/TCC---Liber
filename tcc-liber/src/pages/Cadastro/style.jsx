import styled from "styled-components";
import { Primario, Terciaria } from "../../Style/Paleta";

export const CadAlign = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Cadastrar = styled.form`
    background-color: ${Primario};
    border-radius: 5px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 30%;
    max-height: 90%;

    h1 {
        font-size: 3rem;
        font-family: Century Gothic;
        margin-bottom: 10%;
    }

   
    a {
        margin-top: 2rem;
        color: black;
        font-size: 1.5rem;
        &:hover{
            color:${Terciaria};
        }
    }


`

export const Adjust = styled.div`
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    max-width: 85%;
    height: 100%;
    max-height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const AdjustImg = styled.div`
    width: 100%;
    height: 100%;
    max-width: 15rem;
    max-height: 15rem;
    margin-bottom: 5%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        height: 100%;
        max-width: 15rem;
        max-height: 15rem;
        border-radius: 100%;
        border: 1px solid black;
    }

`

export const AdjustLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 30rem;
    align-items: center;
    justify-content: center;

`

export const Errado = styled.p`

    background-color: whitesmoke;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    max-width: 85%;
    height: 100%;
    max-height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: ${Terciaria};

`