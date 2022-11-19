import { useState } from "react";
import { All } from "../../Style/all";
import { Button2 } from "../Components/buttons/buttons";
import { DropFile, Inputs } from "../Components/inputs/inputs";
import Axios from 'axios'
import { useEffect } from "react";
import { AxiosUser } from "../../services/axios";
import { BookAlign, BookContent, Capa, Delimitar, Faixa, FaixaN, ImagemPerf, ProfileAutor, Secao, Sinopse, TopContent } from "../Components/bookContent/style";
import { App } from "../Components/Navbar/Navbar";
import { SinopseArea } from "./style";


export function Postar(){

    const [image, setImage] = useState(null)
    const [holdImage, setHoldImage] = useState(null)
    const[pdf, setPdf] = useState(null)
    const[gens, setGens] = useState()
    const[text, setText] = useState()
    const[gen, setGen] = useState(null)
    
    useEffect(() => {
        Axios.get('http://localhost:3001/gen/get').then((response)=>{
            setGens(response.data)
        })
    },[])
 
    const HandleChangeValues = (value) =>{
        setText(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
        
    };


    const Novo = () =>{

            const EusouumPalio = new AxiosUser().axiosCreatePost(image, pdf, text, gen)

    }
    console.log(text)

    const genMud = (value) => {
        setGen(value.target.value)
        
    }

    const GetImg = (value) =>{
        setImage(value.target.files[0]) 
        setHoldImage(URL.createObjectURL(value.target.files[0]))
    }

    const GetPdf = (value) =>{
        setPdf(value.target.files[0]) 
    }

    return(
        <All>
          
          <App />

            <BookAlign>
                <BookContent>
                    <FaixaN>
                        <h1>Qual o nome de sua obra?</h1>
                        <Delimitar>
                        <Inputs 
                            seletor ='' 
                            id='Nome' 
                            name='nome' 
                            type="text" 
                            placeholder="Resposta" 
                            onChange={HandleChangeValues}
                        />
                        </Delimitar>
                        <h1>O gênero principal: </h1>
                        <select onChange={genMud}>
                            {typeof gens !== "undefined" && gens.map((value)=>{
                                
                            
                                return(
                                    
                                    <option key={value.genID} value={value.genID}>{value.nome}</option>
                                )
                            })}
                        </select>
                    </FaixaN>
                    <TopContent>
                        <Capa>
                            <img src={holdImage}></img>
                            
                        </Capa>
                        <ProfileAutor>
                            
                        </ProfileAutor>
                    </TopContent>

                    
                    <Faixa>
                        <Delimitar>
                            <DropFile 
                                id='imgPost' 
                                name='imgPost' 
                                type="file"
                                accept='image/*' 
                                onChange={GetImg} 
                                texto="Envie a imagem da capa"
                            />
                        </Delimitar>

                        <Delimitar>
                            <DropFile 
                                id='pdfPost' 
                                name='pdfPost' 
                                type="file"
                                accept='application/pdf'  
                                onChange={GetPdf}
                                texto="Envie o arquivo PDF de sua obra" 
                            />
                        </Delimitar>
                        <Delimitar>
                            <Button2 type="button" texto="Enviar" onClick={() => Novo()}></Button2>
                        </Delimitar>
                    </Faixa>

                    <Sinopse>
                        <SinopseArea>
                            <textarea
                                id="desc"
                                name="desc"
                                maxLength={7000}
                                cols={5}
                                rows={10}
                                onChange={HandleChangeValues}
                            ></textarea>
                        </SinopseArea>
                        
                    </Sinopse>


                </BookContent>
            </BookAlign>


            

            

            

            
            
            
            
         
        </All>
    )
}