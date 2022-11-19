import  Axios  from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getToken, Token } from '../../services/auth.jsx';
import { AxiosUser } from '../../services/axios.jsx';
import { All } from '../../Style/all.jsx';
import { Foter } from '../Components/footer/Footer.jsx';
import { App } from '../Components/Navbar/Navbar.jsx';
import { Alinhar, Books, CapaH, Centraliza, Content, Margem, Separar } from './Style.jsx';

export function Home(){
    
    const [post, setPost] = useState()

    const ApagaMeme = () =>{
        localStorage.removeItem(Token)
        window.location.reload(false)

    }

    useEffect(() => {
        AxiosUser.axiosGetPost().then((response)=>{
            setPost(response.data)
        })
     
    },[])
    
    return(

            <All >
                <App />
                <Alinhar>
                    <Centraliza>
                        <Separar>
                            <Margem>
                                    <h1>Recém lançados</h1>
                                    <a href='#'>Ver mais</a>
                            </Margem>
                            
                            <Content>
                                
                                {typeof post !== 'undefined' && post.map((value)=>{
                                    return(
                                        <Books key={value.postID}>
                                            <a href={`/Livro/${value.postID}`}>
                                                <CapaH src={value.pathImg}/>
                                                <h3>{value.titulo}</h3>
                                            </a>
                                        </Books>
                                        )}
                                )}

                            </Content>

                        </Separar>
                        
                    </Centraliza>
                    
                </Alinhar>  
   
                 
             
           </All >
    )
}