import { poolConnect } from "../../poolConnect.js"
import { DateNow } from "../utils/services/date.js"


const con = await poolConnect()

export class FKPosImg{
    constructor(postID, imgID){
        if(postID == '' || postID == null || postID == undefined){
            this.postID = ''
        }else{
            this.postID = postID
        }

        if(imgID == '' || imgID == null || imgID == undefined){
            this.imgID = ''
        }else{
            this.imgID = imgID
        }
    }

    async insert(){
        try {
            const { rowsAffected } = con.query(`insert into posImg values(${this.postID}, ${this.imgID}, 1)`)

            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error) 
        }
        
    }

}

export class FKPosGen{
    constructor(postID, fkLikePos){
        if(postID == '' || postID == null || postID == undefined){
            this.postID = ''
        }else{
            this.postID = postID
        }

        if(fkLikePos == '' || fkLikePos == null || fkLikePos == undefined){
            this.fkLikePos = ''
        }else{
            this.fkLikePos = fkLikePos
        }
    }

    async insert(){
        try {
            const { rowsAffected } = con.query(`insert into genPos values(${this.postID}, ${this.fkLikePos}, 1)`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error) 
        }
        
    }
}

export class Comentario{ 
    constructor(textCom, statusCom, fkUser, fkPost, comID){
        if(textCom == '' || textCom == null || textCom == undefined){
            this.textCom = ''
        }else{
            this.textCom = textCom
        }

        if(statusCom == '' || statusCom == null || statusCom == undefined){
            this.statusCom = 1
        }else{
            this.statusCom = statusCom
        }

        if(fkUser == '' || fkUser == null || fkUser == undefined){
            this.fkUser = ''
        }else{
            this.fkUser = fkUser
        }

        if(fkPost == '' || fkPost == null || fkPost == undefined){
            this.fkPost = ''
        }else{
            this.fkPost = fkPost
        }

        if(comID == '' || comID == null || comID == undefined){
            this.comID = ''
        }else{
            this.comID = comID
        }
    }

    async getCom(){

        try {
            const { recordset } = await con.query(`select textCom, u.nome, i.pathImg, c.insertDate, c.comID from coment as c
            inner join usuar as u on(u.userID = c.fkUserCom)
            inner join post as p on(p.postID = c.fkPostCom)
            inner join img as i on(u.fkImg = i.imgID)
            where c.fkPostCom = ${this.fkPost} and u.statusUser = 1 and p.statusPost = 1 and c.statusCom = 1 order by comID desc`)
            return recordset
        } 
        catch (error) 
        {
            return error
        } 
          
    }  
 
    async insert(){

        try {

            
            const { rowsAffected } = con.query(`insert into coment values('${this.textCom}', ${this.statusCom}, 
            '${DateNow()}', '', ${this.fkUser}, ${this.fkPost})`)

            return rowsAffected
        } 
        catch (error) 
        {
            return error
        } 
        
    }
}
 