import styled from "styled-components";
import { Primario } from "../../../Style/Paleta";


export const Navbar = styled.div`

    background-color: ${Primario};
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 7.5rem;
    min-height: 7.5rem;
    box-shadow: 5px -5px 20px #000;
    margin-right: 100%; 
    display: flex;
    justify-content: space-between;

`;

export const ProfileContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 7rem;
    max-height: 6rem;
    margin-left: 3rem;

    @media(min-width: 2260px){
        max-width: 14rem;
        max-height: 12rem;
    }

    @media(max-width: 426px){
        max-width: 4rem;
        max-height: 4rem;
    }

`; 

export const Title = styled.h2`

    font-size: 2rem;
    font-family: Century Gothic;
    margin-left: 1rem;

    a{
        text-decoration: none;
    }

    @media(max-width: 426px){
        font-size: 1.5rem;
        margin-left: 0.7rem;
    }


`;

export const Links = styled.ul`

    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    font-size: 1.6rem;
    font-weight: bold;
    font-family: Century Gothic
    ;
    margin-right: 3rem;

`;

export const Link = styled.li`

    text-decoration: none;

`;

export const link = styled.a`

    text-decoration: none;
    font-size: 5rem;

`;

