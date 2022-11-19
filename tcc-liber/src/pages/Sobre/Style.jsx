import styled from "styled-components";
import { Secundario } from "../../Style/Paleta";

export const SobreContent = styled.div`
    margin-top: 2rem;
    height: 100%;
    width: 70%;
    min-height: 90rem;
    background-color: ${Secundario};
    display: flex;
    align-items: center;
    border-radius: 1rem;
    flex-direction: column;
    border: 1px solid black;

`

export const FaixaSobre = styled.div`
    width: 100%;
    height: 100%;
    max-height: 5rem;
    background-color: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom: 2px solid black;

    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 2.5rem;
    }

`
export const FaixaSobreS = styled.div`
    width: 100%;
    height: 100%;
    max-height: 5rem;
    background-color: white;
    border-bottom: 2px solid black;
    border-top: 2px solid black;

    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 2.5rem;
    }

`

export const ContentSobre = styled.div`
    height: 80%;
    width: 80%;
    display: flex;
    padding-top: 2%;
    padding-bottom: 2%;
    justify-content: center;

    p{
        font-size: 2rem;
        text-align: justify;
        font-weight: bold;
    }

`

export const Criadores = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Criador = styled.div`
    width: 100%;
    height: 100%;
    max-width: 20rem;
    max-height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    

    a{
        width: 100%;
        height: 100%;
        text-decoration: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        color: black;

        &:pointer{
            
        }

        img{
            width: 100%;
            height: 100%;
            max-width: 15rem;
            max-height: 15rem;
            border-radius: 100%;
        }
    
    }

`