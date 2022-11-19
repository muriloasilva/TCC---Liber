import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../../services/auth";
import { AxiosCrud, AxiosUser } from "../../services/axios";
import { All } from "../../Style/all";
import {  pdfjs } from 'react-pdf';
import { BookAlign, BookContent, Capa, Coment, ComentAlign, ComentProfile, ComentSection, ComentText, Delimitar, Faixa, FaixaN, ImagemPerf, NameComent, ProfileAutor, Secao, Sinopse, TopContent } from "../Components/bookContent/style";
import { Button2 } from "../Components/buttons/buttons";
import { Documento } from "../Components/documento/documento";
import { Inputs } from "../Components/inputs/inputs";
import { App } from "../Components/Navbar/Navbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export function Livro(){
    
    const params = useParams()
    const [obra, setObra] = useState('')
    const [userImg, setUserImg] = useState('')
    const [coments, setComents] = useState('')
    const [change, setChange] = useState(0)

    console.log(obra)
    useEffect(() => {
        new AxiosUser().axiosLiv(params.postID).then((response)=>{
         
            setObra(response.liv)
            setUserImg(response.userImg)
            setComents(response.coment)
            
        })
 
    },[change])

    const Del = () =>{
        if(!getToken()){
            return(<></>)
        }else{
            if(getToken().userID == obra.userID){
                return(
                <Delimitar>
                    <Button2 texto="Deletar" onClick={()=>{new AxiosUser().axiosDelPost(obra.postID)}}></Button2>
                </Delimitar>
                )
            }else{
                return(
                    <></>
                )
                
            }
        }
    }

    const ContentPart = () => {

        const [select, setSeletor] = useState(0)
        const [ textCom, setTextCom ] = useState()

    
    
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
                        {Del()}
                    </Faixa>
                    <Sinopse>
                        <p>{obra.texto}</p>
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
                        {Del()}
                    </Faixa>    
                    <Secao>
                        <Documento pdf={obra.pathLiv} />
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
                            {Del()}
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
                                new AxiosCrud().Insert('/coment/insert', {textCom: textCom.textCom, fkUser: getToken().userID, fkPost: obra.postID})
                                setChange(change + 1)
                                setChange(change + 1)
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
                            {Del()}
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

    return(
        <All>
            <App />
            <BookAlign>
                <BookContent> 
                    <FaixaN>
                        <h1>Nome da obra: {obra.titulo}</h1>
                        <h1>Genero: {obra.genNome}</h1>
                        <h1>Publicado em: {obra.insertDate}</h1>
                    </FaixaN>
                    <TopContent>
                        <Capa>
                            <img alt='' src={obra.pathImg} />
                        </Capa>
                        <ProfileAutor>
                            <a href={`/Perfil/${obra.userID}`}>
                                <h1>Perfil do autor</h1>
                                <ImagemPerf>
                                    <img src={userImg.pathImg}></img>
                                </ImagemPerf>
                                    <h1>{obra.userName}</h1>
                            </a>
                        </ProfileAutor>
                    </TopContent>

                    {ContentPart()}
                            
                </BookContent>
            </BookAlign>
        </All>
    )
    
}