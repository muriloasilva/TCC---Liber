import styled from "styled-components";
import { Secundario } from "../../../Style/Paleta";

export const Ajuste = styled.div`
    width: 100%;
    background-color: ${Secundario};
    height: 100%;
    display: flex;
    justify-content: center;

    #ResumeContainer {
    
    width: 100%;
    background-color: ${Secundario};
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .PDFDocument {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: ${Secundario};
    }

    .PDFPage {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: ${Secundario};
    }

    .PDFPageOne {
        padding-top: 1rem;
        background-color: ${Secundario};
    }

    .PDFPage > canvas {
        max-width: 100%;
        height: auto !important;
        background-color: ${Secundario};
    }

`

export const AjusteB = styled.div`
    width: 100%;
    max-width: 10rem;
    height: 100%;
    max-height: 10rem;
    justify-self: center;
    align-self: center;
`