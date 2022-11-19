import { poolConnect } from "../../poolConnect.js"
import utf8 from 'utf8'
import { DateNow } from "../utils/services/date.js"

const con = await poolConnect()

export class PostModel {
    constructor(nome, desc, livID, statusPost,userID, postID ){
        if(nome == '' || nome == null || nome == undefined){
            this.nome = ''
        }else{
            this.nome = nome
        }
        if(desc == '' || desc == null || desc == undefined){
            this.desc = ''
        }else{
            this.desc = desc
        }
        if(livID == '' || livID == null || livID == undefined){
            this.livID = ''
        }else{
            this.livID = livID
        }

        if(statusPost == '' || statusPost == null || statusPost == undefined){
            this.statusPost = 1
        }else{
            this.statusPost = statusPost
        }
        if(userID == '' || userID == null || userID == undefined){
            this.userID = ''
        }else{
            this.userID = userID
        }
        if(postID == '' || postID == null || postID == undefined){
            this.postID = ''
        }else{
            this.postID = postID
        }

        
    }

    async insert(){
        try {
            const { rowsAffected } = await con.query(`insert into post values('${this.nome}',
            '${this.desc}', 1, '${DateNow()}', '', ${this.userID}, ${this.livID}, 0)`)
            
            const { recordset } = await con.query (`select postID from post where titulo = '${this.nome}' and statusPost = 1`)
            
            return recordset
       
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    static async get(){
        try {
            const { recordset } = await con.query(`select titulo, texto, postID, curtir, us.nome as userName, g.nome as genNome, pt.insertDate, pathImg, imgID, livID, userID from post as pt 
                inner join usuar as us on(pt.fkUser = us.userID)
                inner join posImg as pm on(pt.postID = pm.fkPost)
                inner join img as m on(pm.fkImg = m.imgID)
                inner join liv as l on(pt.fkLiv = l.livID)
                inner join genPos as gp on(pt.postID = gp.fkPos)
                inner join gen as g on (gp.fkGen = g.genID)
                where statusUser = 1 and statusPost = 1 and statusLiv = 1 and statusImg = 1 
                order by postID desc`) 
                return recordset 
            
        } 
        catch (error) 
        {
            return error
        }
    }

    async GetFilter(){
        try {
            const { recordset } = await con.query(`select titulo, texto, postID, curtir, us.nome as userName, g.nome as genNome, pt.insertDate, pathImg, pathLiv, imgID, livID, userID from post as pt 
                inner join usuar as us on(pt.fkUser = us.userID)
                inner join posImg as pm on(pt.postID = pm.fkPost)
                inner join img as m on(pm.fkImg = m.imgID)
                inner join liv as l on(pt.fkLiv = l.livID)
                inner join genPos as gp on(pt.postID = gp.fkPos)
                inner join gen as g on (gp.fkGen = g.genID)
                where statusUser = 1 and statusPost = 1 and statusLiv = 1 and statusImg = 1 and postID = '${this.postID}'`) 
                return recordset 
            
        } 
        catch (error) 
        {
            return error
        }
    }

    async GetFilterUser(){
        try {
            const { recordset } = await con.query(`select titulo, pathImg, postID from post as pt 
                inner join usuar as us on(pt.fkUser = us.userID)
                inner join posImg as pm on(pt.postID = pm.fkPost)
                inner join img as m on(pm.fkImg = m.imgID)
                where statusUser = 1 and statusPost = 1 and statusImg = 1 and userID = ${this.userID}`) 
                return recordset 
            
        } 
        catch (error) 
        {
            return error
        }
    }

    async deletePost(){
        try {
            const { rowsAffected } = await con.query(`update post set statusPost = 0 where postID = ${this.postID}`)
            
            return rowsAffected
       
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

}

/*select * from post as pt
inner join usuar as us on(pt.fkUser = us.userID)
inner join posImg as pm on(pt.postID = pm.fkPost)
inner join img as m on(pm.fkImg = m.imgID)

inner join liv as l on(pt.fkLiv = l.livID)
inner join genPos as gp on(pt.postID = gp.fkPos)
inner join gen as g on (gp.fkGen = g.genID) */