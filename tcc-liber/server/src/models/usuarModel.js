import { poolConnect } from "../../poolConnect.js"
import { DateNow } from "../utils/services/date.js"

const con = await poolConnect()

export class Usuar{
    constructor(email, senha, nome, nomePlum, statusUser, fkImg, userID){
        if(email == '' || email == null || email == undefined){
            this.email = ''
        }else{
            this.email = email 
        }

        if(senha == '' || senha == null || senha == undefined){
            this.senha = ''
        }else{
            this.senha = senha
        }

        if(nome == '' || nome == null || nome == undefined){
            this.nome = ''
        }else{
            this.nome = nome
        }

        if(nomePlum == '' || nomePlum == null || nomePlum == undefined){
            this.nomePlum = ''
        }else{
            this.nomePlum = nomePlum
        }

        if(statusUser == '' || statusUser == null || statusUser == undefined){
            this.statusUser = 1
        }else{
            this.statusUser = 1
        }

        if(fkImg == '' || fkImg == null || fkImg == undefined){
            this.fkImg = 1
        }else{
            this.fkImg = fkImg
        }

        if(userID == '' || userID == null || userID == undefined){
            this.userID = '' 
        }else{ 
            this.userID = userID
        }
    }

    static async get(){
        try {
            const { recordset } = await con.query('select * from usuar')
            
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return (error) 
        }
    }

    async getProfile(){
        try {
            const { recordset } = await con.query(`select nome, us.insertDate, fkImg, nomePlum, statusUser, userID, pathImg from usuar as us 
            inner join img as i on(us.fkImg = i.imgID)
            where userID = '${this.userID}' and statusUser = 1`)
            console.log(recordset)
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async insert(){
        try {
            const { rowsAffected } = con.query(`insert into usuar values ('${this.email}', 
            '${this.senha}','${this.nome}', '${this.nomePlum}', ${this.statusUser}, 
            '${DateNow()}', '', ${this.fkImg})`)
            return true
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async update(){
        try {
            const { rowsAffected } = await con.query(`update usuar set email = '${this.email}' , 
            senha = '${this.senha}', nome = '${this.nome}', nomePlum = '${this.nomePlum}', modDate = '${DateNow()}',
            fkImg = ${this.fkImg} where userID = ${this.userID}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async delete(){
        try {
            const { rowsAffected } = await con.query(`delete from usuar where userID = ${this.userID}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
    /* Login está verificando primeiro se a conta existe com o "where" */

    async login(){
        try {
            const { recordset } = await con.query(`SELECT * FROM usuar 
                WHERE email = '${this.email}' and senha = ${this.senha} and statusUser = 1`)
            if (recordset.length > 0)
                return recordset
            else
                return false
        } 
        catch (error) 
        {
            console.log('Model error ' + error)
            return error
        }
    }

    async getImg(){
        try {
            const { recordset } = await con.query(`select pathImg from usuar as us 
            inner join img as i on(us.fkImg = i.imgID)
            where userID = ${this.userID} and statusUser = 1`)
    
            return recordset 
            
        } 
        catch (error) 
        {
            return error
        }
    }

}