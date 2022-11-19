import styled from "styled-components";
import { Primario, Secundario } from "../../Style/Paleta";

export const Alinhar = styled.div`
    background-color: transparent;
    height: 100%;
    width: 100%;
    max-width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const Centraliza = styled.div`
    background-color: transparent;
    height: 100%;
    width: 100%;
    max-width: 70%;
    display: flex;
    flex-direction: column;

`

export const Separar = styled.div`
    background-color: ${Secundario};
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    border: 1px solid black;
    box-shadow: 5px 10px 20px #000 ;

    border-radius: 1rem;
`

export const Margem = styled.div`
    background-color: ${Primario};
    width: 100%;
    height: 100%;
    min-height: 4rem;
    max-height: 4rem;
    display: flex;
    border-bottom:1px solid black ;
    padding-left: 2rem;
    padding-right: 2rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    align-items: center;
    justify-content: space-between;

    a{
        font-size: 2rem;
        text-decoration: none;
        color: black;
        font-style: oblique;
        font-weight: 500;
    }

`
export const Content = styled.div`
    background-color: transparent;
    height: 100%;
    width: 100%;
    display: grid;
    padding-top: 2%;
    padding-bottom: 3%;
    justify-content: space-around;
    grid-gap: 1%;
    grid-template-columns: 18rem 18rem 18rem 18rem 18rem;
    grid-template-rows: 50% 50%;

`

export const Books = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 25rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;


    a{
        text-decoration: none;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            margin-top: 1rem;
            overflow: hidden;
            width: 100%;
            text-align: center;
        }
        

    }

`

export const CapaH = styled.img`
    width: 100%;
    height: 90%;
    

`