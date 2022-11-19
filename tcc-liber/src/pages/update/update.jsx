import Axios from 'axios'
import { useState } from 'react'
import { getToken, Token } from '../../services/auth'
import { AxiosUser } from '../../services/axios'
import { Data } from '../../services/utils'
import { All } from '../../Style/all'
import { Adjust, AdjustImg, CadAlign, Cadastrar } from '../Cadastro/style'
import { Button } from '../Components/buttons/buttons'
import { DropFile, Inputs } from '../Components/inputs/inputs'

export function Update() { 
    
    const[inf, setInf] = useState(getToken())
    const[image, setImage] = useState()
    const [handleImg, setHandleImg] = useState()

    const ChangeUpdate = (value) =>{
        setInf(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };
    const GetImg = (value) =>{
        setImage(value.target.files[0]) 
        setHandleImg(URL.createObjectURL(value.target.files[0]))
    }
    console.log(image)
    return(
        <All>
            <CadAlign>
                <Cadastrar>
                    <h1>Atualize sua conta</h1>
                    
                    <AdjustImg>
                        <img src={handleImg}/>
                    </AdjustImg>
                    
                    <Adjust>
                        <DropFile 
                            id='imagem' 
                            name='imagem'  
                            type='file' 
                            accept='image/*' 
                            texto='Adicionar imagem de Perfil' 
                            onChange={GetImg}
                        />
                    </Adjust>

                    <Adjust>
                        <Inputs id="nome" name="nome" type="text" placeholder="Nome" onChange={ChangeUpdate} />
                    </Adjust>
                    
                    <Adjust>
                        <Button type='button' onClick={() => new AxiosUser().axiosAlter(inf, image)} texto="Confirmar" ></Button>
                    </Adjust>

                    <Adjust>
                        <Button type='button' onClick={() => window.location.replace(`Perfil/../${getToken().nome}`, {replace: true})} texto="Cancelar" ></Button>
                    </Adjust>
                   
                </Cadastrar>
            </CadAlign>
        </All>
    )
}