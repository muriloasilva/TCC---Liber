import { poolConnect } from "../../poolConnect.js"
import utf8 from 'utf8'
import { DateNow } from "../utils/services/date.js"

const con = await poolConnect()

export class LivModel {
    constructor(nome, path, keyLiv, statusLiv, livID){
        if(nome == '' || nome == null || nome == undefined){
            this.nome = ''
        }else{
            this.nome = utf8.decode(nome) 
        }
        if(path == '' || path == null || path == undefined){
            this.path = ''
        }else{
            this.path = path
        }
        if(keyLiv == '' || keyLiv == null || keyLiv == undefined){
            this.keyLiv = ''
        }else{
            this.keyLiv = keyLiv
        }

        if(statusLiv == '' || statusLiv == null || statusLiv == undefined){
            this.statusLiv = 1
        }else{
            this.statusLiv = statusLiv
        }

        if(livID == '' || livID == null || livID == undefined){
            this.livID = '' 
        }else{
            this.livID = livID
        }
    }

    async insert(){
        try {
            const { rowsAffected } = await con.query(`insert into liv values('${this.nome}',1, 
            '${this.path}', '${DateNow()}', '', '${this.keyLiv}')`)

            const { recordset } = await con.query (`select livID from liv where keyLiv = '${this.keyLiv}' and statusLiv = 1`)
            
            return recordset

           
       
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

}