import { Texto } from "../../../Style/all"
import { Icones } from "../icones/icones"
import { Input, InputDiv, InputDivD, InputLabel, TextArea } from "./style"

export function Inputs({seletor, id, name, type, maxLength, defaultValue, placeholder, onChange}){

    return(
            <InputDiv>
                <Icones seletor={seletor} />
                <Input 
                    id={id}
                    name={name}
                    type={type}
                    maxLength={maxLength}
                    size={maxLength}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </InputDiv>
        )
}

export function Textarea(id, name, maxLength, defaultValue, placeholder, value, onChange, cols, rows){
    return(
        <InputDivD>
            <h1>Escreva sua sinopse</h1>
            <textarea 
                id={id}
                name={name}
                maxLength={maxLength}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={onChange} 
                cols={cols}
                rows={rows}
            ></textarea>
        </InputDivD>
    )
}

export function DropFile({ id, name, type, accept, texto, onChange}){

    return(
        <>
            <InputLabel htmlFor={name}>
                <Texto>{texto}</Texto>
            </InputLabel>
                <Input 
                    id={id}
                    name={name}
                    type={type}
                    accept={accept}
                    onChange={onChange}
                /> 
        </>
        )
}