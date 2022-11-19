import { getToken, Logout, Token } from "../../../services/auth"
import { All } from "../../../Style/all"
import { Button2 } from "../buttons/buttons"
import { ProfileAlign, Nome, IMGProfile, Info, Obras, Profile, Inf, UserSobreContent, ContentUser} from "./style"
import { AxiosUser } from "../../../services/axios"
import { BookAlign, Capa, Delimitar } from "../bookContent/style"
import { Books, CapaH, Content } from "../../Home/Style"

export function OtherUser({user, liv}){
    const imgU = user.pathImg

    const Obras = ()=>{
        if(!liv){
            return(<></>)
        }else{
            return(typeof liv !== 'undefined' && liv.map((value)=>{
                return(
                    <Books key={value.postID}>
                        <a href={`/Livro/${value.postID}`}>
                            <CapaH src={value.pathImg}/>
                            <h3>{value.titulo}</h3>
                        </a>
                    </Books>
                    )}
            ))
        }
        
        
    }

    return(
        <BookAlign>
            <UserSobreContent>
                <Profile>
                    
                    <ProfileAlign>
                        
                        <img src={imgU}></img>
                     

                        <Nome>{user.nome}</Nome>
                   </ProfileAlign>
                </Profile>

                <Info>
                        <Delimitar>
                            <h1>Conta criada em: {user.insertDate}</h1>
                        </Delimitar>
                   
                </Info>

                    <ContentUser>
                        {Obras()}
                    </ContentUser>
                
            </UserSobreContent>
        </BookAlign>
    )
}

export function MyProfile({user, liv}){

    const imgU = user.pathImg

    const update = () =>{
        window.location.replace('Perfil/../Update')
    }

    const Obras = ()=>{
        console.log(!liv)
        if(liv){
            return(<></>)
        }else{
            return(typeof liv !== 'undefined' && liv.map((value)=>{
                return(
                    <Books key={value.postID}>
                        <a href={`/Livro/${value.postID}`}>
                            <CapaH src={value.pathImg}/>
                            <h3>{value.titulo}</h3>
                        </a>
                    </Books>
                    )}
            ))
        }
        
        
    }

    return(
        <BookAlign>
            <UserSobreContent>
                <Profile>
                    
                    <ProfileAlign>
                        
                        <img src={imgU}></img>
                     

                        <Nome>{user.nome}</Nome>
                   </ProfileAlign>
                </Profile>

                <Info>
                        <Delimitar>
                            <h1>Conta criada em: {user.insertDate}</h1>
                        </Delimitar>

                        

                    
                        <Delimitar>
                            <Button2 type='button' onClick={() => new AxiosUser().axiosDel()} texto="Deletar" ></Button2>  
                        </Delimitar>

                        <Delimitar>
                            <Button2 type='button' onClick={() => update()} texto="Update" ></Button2>
                        </Delimitar>
                        <Delimitar>
                            <Button2 type='button' onClick={() => Logout()} texto="Logout" ></Button2>
                        </Delimitar>
                        
                       
                   
                </Info>

                    <ContentUser>
                        {Obras()}
                    </ContentUser>
                
            </UserSobreContent>
        </BookAlign>
    )
}