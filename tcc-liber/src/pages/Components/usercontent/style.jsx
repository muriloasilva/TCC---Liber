import styled from "styled-components";
import { Primario, Secundario } from "../../../Style/Paleta";

export const UserSobreContent = styled.div`
    margin-top: 2rem;
    height: 100%;
    width: 70%;
    min-height: 200rem;
    background-color: ${Secundario};
    display: flex;
    align-items: center;
    border-radius: 1rem;
    flex-direction: column;
    border: 1px solid black;
`

export const Profile = styled.div`
    background-color: ${Primario};
    width: 100%;
    height: 100%;
    min-height: 30rem;
    max-height: 30rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProfileAlign = styled.div`
    width: 100%;
    height: 100%; 
    max-width: 20rem;
    max-height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 100%;
        height: 100%;
        max-height: 18rem;
        max-width: 18rem;
        border-radius: 100%;
    }

`

export const Nome = styled.h1`
    background-color: white;
    color: black;
    margin-top: 1%;
`

export const IMGProfile = styled.div`
    background-color: ${Secundario};
    width: 9.5%;
    height: 60%;

`
export const Info = styled.div`
    background-color: whitesmoke;
    width: 100%;
    height: 100%;
    max-height: 5rem;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Inf = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 50%;

`

export const Obras = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

`

export const ContentUser = styled.div`
    background-color: transparent;
    height: 100%;
    width: 100%;
    display: grid;
    padding-top: 2%;
    padding-bottom: 3%;
    justify-content: space-around;

    grid-template-columns: 18rem 18rem 18rem 18rem 18rem;
    grid-template-rows: 30rem 30rem 30rem 30rem 30rem;

`





