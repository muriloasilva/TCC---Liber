import styled from "styled-components";
import { Primario } from "../../../Style/Paleta";

export const Footer = styled.div`
    background-color: ${Primario};
    font-size: larger;
    color: dark;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 20%;
    text-align: center;
    font-family: 'Sen', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const CenterText = styled.div`
    max-width: 30rem;
    width: 100%;
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const ItemAbout = styled.p`
    color: #2b2b2b; 
    font-size: 2em;
    margin-top: 1rem;
    font-family: Arial, Helvetica, sans-serif;

`
export const ItemPara = styled.p`
    color: black;
`