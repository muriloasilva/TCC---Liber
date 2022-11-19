import { useState } from "react"
import { useEffect } from "react"
import { AxiosCrud, AxiosUser } from "../../../services/axios"
import { BookAlign, BookContent, Capa, FaixaN, ImagemPerf, ProfileAutor, TopContent } from "./style"
import {  pdfjs } from 'react-pdf';
import { ContentPart } from "./parts/contentPart/contentPart"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export function MyBook({obra, userImg, coments}){
    
    const itens = obra
    const img = itens.pathImg
    console.log(obra)
    return(
        <BookAlign>
                <BookContent> 
                    <FaixaN>
                        <h1>Nome da obra: {itens.titulo}</h1>
                        <h1>Genero: {itens.genNome}</h1>
                        <h1>Publicado em: {itens.insertDate}</h1>
                    </FaixaN>
                    <TopContent>
                        <Capa>
                            <img alt='' src={itens.pathImg} />
                        </Capa>
                        <ProfileAutor>
                            <a href={`/Perfil/${itens.userName}`}>
                                <h1>Perfil do autor</h1>
                                <ImagemPerf>
                                    <img src={userImg.imgU}></img>
                                </ImagemPerf>
                                <h1>{itens.userName}</h1>
                            </a>
                        </ProfileAutor>
                    </TopContent>

                    <ContentPart coments={coments} texto={obra.texto} book={obra.pathLiv} userID={obra.userID} postID={obra.postID} />

                </BookContent>
            </BookAlign>
    )
}