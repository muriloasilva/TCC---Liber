import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../../services/auth";
import { AxiosUser } from "../../services/axios";
import { All } from "../../Style/all";
import { Foter } from "../Components/footer/Footer";
import { App } from "../Components/Navbar/Navbar";
import { MyProfile, OtherUser } from "../Components/usercontent/userContent";

export function UserPage(){


    const params = useParams() 
    const [user, setUser] = useState('')
    const [livs, setLivs] = useState('')

    useEffect(() => {
        new AxiosUser().axiosGet(params.userID).then((response)=>{
            console.log(response)
            setUser(response.user)
            setLivs(response.liv)
        })
    },[])
    
    
    if(user !== undefined){ 
            if(getToken()){
                if(user.nome == getToken().nome){ 
                    return(
                            <All>
                                <App />
                                <MyProfile user={user} liv={livs} /> 
                      
                            </All>
                    )
                }else if(user){
                    return(    
                        <All>
                            <App />
                                <OtherUser user={user} liv={livs} />  
                        </All>
                    )
                }  
            } else{
                return(    
                    <All>
                        <App />
                            <OtherUser user={user} liv={livs} />  
                    </All>
                )
            }
                   
    }else{
        return(    
                <All>
          
                    <App />
                    <All>
                        <h1>Usuario inexistente</h1>
                    </All>

                </All>

        )
    }
}