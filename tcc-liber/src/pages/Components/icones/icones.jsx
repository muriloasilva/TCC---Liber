import { FaUser } from "react-icons/fa"
import { MdEmail, MdLock } from "react-icons/md"

export function Icones({seletor}){
    if (seletor == 1){
        return(
            <FaUser />
        )
    }else if (seletor == 2){
        return(
            <MdEmail />
        )
    }else if (seletor == 3){
        return(
            <MdLock />
        )
    }
}