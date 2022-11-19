/*import { getToken } from "../../../../../services/auth";
import { AxiosCrud, AxiosUser } from "../../../../../services/axios";
import { Button2 } from "../../../buttons/buttons";
import { Delimitar } from "../../style";

export function LikeFav({ID, post}){
    if(!getToken()){
        return(<></>)
    }else{
        if(getToken().userID == ID){
            return(
            <Delimitar>
                <Button2 texto="Deletar" onClick={()=>{new AxiosUser().axiosDelPost(post)}}></Button2>
            </Delimitar>
            )
        }else{
            return(
                <Delimitar>
                    <Button2 texto="Curtir" onClick={() => new AxiosCrud().Insert('/like/ins', {fkLikePos: post, fkLikeUse: getToken().userID})}></Button2>
                </Delimitar>
            )
            
        }
    }
}*/