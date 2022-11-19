import styled from "styled-components";
import { Primario, Secundario } from "../../../Style/Paleta";



export const BookAlign = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    

`


export const BookContent = styled.div`
    margin-top: 2rem;
    height: 100%;
    width: 70%;
    min-height: 100rem;
    background-color: ${Secundario};
    display: flex;
    align-items: center;
    border-radius: 1rem;
    flex-direction: column;
    border: 1px solid black;
`

export const TopContent = styled.div`

    background-color: ${Secundario};
    width: 100%;
    height: 100%;
    min-height: 30rem;
    max-height: 30rem;
    display: flex;
    align-items: center;
    justify-content: space-around;


`

export const Capa = styled.div`
    width: 100%;
    height: 100%;
    max-height: 85%;
    max-width: 20rem;
    background-color: white;
    margin-left: 15%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    img{
        width: 100%;
        height: 100%;
    }

`

export const ProfileAutor = styled.div`
    width: 100%;
    height: 100%;
    max-height: 85%;
    max-width: 40%;
    margin-right: 10%;
    background-color: transparent;
    display: flex;
    

    a{
        width: 100%;
        height: 100%;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`
export const ImagemPerf = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 75%;
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

export const FaixaN = styled.div`
    background-color: ${Primario};
    width: 100%;
    height: 5rem;
    min-height: 5rem;
    max-height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
    padding-right: 3rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`

export const Faixa = styled.div`
    background-color: white;
    width: 100%;
    height: 5rem;
    min-height: 5rem;
    max-height: 5rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const Delimitar = styled.div`
    width: 100%;
    max-width: 20rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Sinopse = styled.div`
    background-color: transparent;
    min-height: 20%;
    width: 80%;
    max-height: 100%;
    max-height: 200rem;
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    margin-bottom: 100%;
    p{
        text-align: justify;
        font-size: 2rem;
        font-weight: 500;
    }

`
export const FaixaPdf = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    max-height: 5rem;
    min-height: 5rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
`
export const Secao = styled.section`
    background-color: transparent;
    margin-top: 5% ;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ComentSection = styled.div`
    width: 100%;
    min-height: 25rem;
    background-color: ${Secundario};
    display: flex;
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
`

export const Coment = styled.div`
    width: 80%;
    height: 100%;
    background-color: white;
    border: 1px solid gray;
    max-height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        width: 100%;
        height: 100%;
        max-width: 10rem;
        max-height: 10rem;
    }
`
export const NameComent = styled.h1`
    width: 100%;
    height: 100%;
    max-height: 3rem;
    display: flex;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid black;

`

export const ComentAlign = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ComentProfile = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
`

export const ComentText = styled.p`
    font-size: 1.5rem;
    text-justify: inherit;
    background-color: white;
    width: 100%;
    max-width: 70%;
    height: 100%;
`