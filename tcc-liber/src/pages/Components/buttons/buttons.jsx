import { Botao, BotaoD } from "./style";

export function Button({type, onClick, texto}){
    
    return(
        <Botao 
            type={type}
            onClick={onClick}
            >
            {texto}
        </Botao>
    )
    
}

export function Button2({type, onClick, texto}){
    
    return(
        <BotaoD
            type={type}
            onClick={onClick}
            >
            {texto}
        </BotaoD>
    )
    
}