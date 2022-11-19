import { useEffect } from "react"
import { useState } from "react"
import { getToken } from "../../../../../services/auth"
import { AxiosCrud, AxiosUser } from "../../../../../services/axios"
import { Button2 } from "../../../buttons/buttons"
import { Documento } from "../../../documento/documento"
import { Inputs } from "../../../inputs/inputs"
import { Coment, ComentAlign, ComentProfile, ComentSection, ComentText, Delimitar, Faixa, NameComent, Secao, Sinopse } from "../../style"

export function ContentPart({ coments, texto, book, userID, postID }){

    const [select, setSeletor] = useState(0)
    const [ textCom, setTextCom ] = useState()
    const [change, setChange] = useState(0)


    const HandleChangeValues = (value) =>{
        setTextCom(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };
    

    if(select == 0){
        return (
            <>
                <Faixa>
                    <Delimitar>
                        <Button2 texto='Ler' onClick={() => setSeletor(1)}></Button2>
                    </Delimitar>
                        
                    <Delimitar>
                        <Button2 texto="Comentar" onClick={() => setSeletor(2)}></Button2>
                    </Delimitar>

                </Faixa>
                <Sinopse>
                    <p>{texto}</p>
                </Sinopse>
            </>
        )
    }else if(select == 1){
        return( 
            <>
                <Faixa>
                    <Delimitar>
                        <Button2 texto='Sinopse' onClick={() => setSeletor(0)}></Button2>
                    </Delimitar>
                        
                    <Delimitar>
                        <Button2 texto="Comentar" onClick={() => setSeletor(2)}></Button2>
                    </Delimitar>

                </Faixa>
                <Secao>
                    <Documento pdf={book} />
                </Secao>
            </>
        )
    }else if(select == 2){
        if(getToken()){
            return( 
                <>
                    <Faixa>
                        <Delimitar>
                            <Button2 texto='Sinopse' onClick={() => setSeletor(0)}></Button2>
                        </Delimitar>
                            
                        <Delimitar>
                            <Button2 texto="Ler" onClick={()=> setSeletor(1)}></Button2>
                        </Delimitar>
           
                    </Faixa>
                    <Faixa>
                    <Inputs 
                        id="coment" 
                        name="textCom" 
                        type="text" 
                        placeholder="Gostaria de deixar um comentário sobre a obra? (Limite de caracteres: 760)" 
                        maxLength={760}
                        onChange={HandleChangeValues}
                    />
                    <Delimitar>
                        <Button2 texto="Enviar" onClick={() =>{ 
                            new AxiosCrud().Insert('/coment/insert', {textCom: textCom.textCom, fkUser: getToken().userID, fkPost: postID})
                            window.location.reload(false)
                        }} ></Button2>
                    </Delimitar>
                    </Faixa>
    
                    {typeof coments !== undefined && coments.map((value)=>{
                        return(
                            <ComentSection key={value.comID}>
                                <Coment>
                                        <NameComent>{value.nome}</NameComent>
                                        
                                    <ComentAlign>
                                        <a src={`/Perfil/${value.nome}`}>
                                            <ComentProfile src={value.pathImg}/>
                                        </a>
                                        <ComentText>{value.textCom}</ComentText>
                                    </ComentAlign>
                                </Coment>
                            </ComentSection>
                        )
                    })
                    }
                </>
            )
        }else{
            return( 
                <>
                    <Faixa>
                        <Delimitar>
                            <Button2 texto='Sinopse' onClick={() => setSeletor(0)}></Button2>
                        </Delimitar>
                            
                        <Delimitar>
                            <Button2 texto="Ler" onClick={()=> setSeletor(1)}></Button2>
                        </Delimitar>
              
                    </Faixa>
    
                    {typeof coments !== undefined && coments.map((value)=>{
                        return(
                            <ComentSection key={value.comID}>
                                <Coment>
                                        <NameComent>{value.nome}</NameComent>
                                        
                                    <ComentAlign>
                                        <a src={`/Perfil/${value.nome}`}>
                                            <ComentProfile src={value.pathImg}/>
                                        </a>
                                        <ComentText>{value.textCom}</ComentText>
                                    </ComentAlign>
                                </Coment>
                            </ComentSection>
                        )
                    })
                    }
                </>
            )
        }
        
    }
}