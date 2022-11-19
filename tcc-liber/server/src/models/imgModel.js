import { poolConnect } from "../../poolConnect.js"
import { DateNow } from "../utils/services/date.js"
import utf8 from 'utf8'
import aws from 'aws-sdk'

const con = await poolConnect()

const s3 = new aws.S3()
// location, key



export class ImgModel{
    constructor(originalname, path, keyImg, statusImg, imgID){

        if(originalname == '' || originalname == null || originalname == undefined){
            this.originalname = ''
        }else{
            this.originalname = utf8.decode(originalname) 
        }

        if(path == '' || path == null || path == undefined){
            this.path = 'https://libert.s3.amazonaws.com/43f74229271e5e88759254dde0fa9026'
        }else{
            this.path = path  
        }

        if(keyImg == '' || keyImg == null || keyImg == undefined){
            this.keyImg = '43f74229271e5e88759254dde0fa9026'
        }else{
            this.keyImg = keyImg 
        }

        if(statusImg == '' || statusImg == null || statusImg == undefined){
            this.statusImg = 1
        }else{
            this.statusImg = statusImg
        }

        if(imgID == '' || imgID == null || imgID == undefined){
            this.imgID = ''
        }else{
            this.imgID = imgID
        }

    }

    async insert(){
        try {
            const { rowsAffected } = await con.query(`insert into img values('${this.originalname}',
            '${this.path}', '${this.keyImg}', 1, '${DateNow()}', '')`)

            const { recordset } = await con.query (`select imgID from img where keyImg = '${this.keyImg}' and statusImg = 1`)
            
            return recordset
       
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    static async getImg(){
        try {
            const { recordset } = await con.query(`select * from img`)
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return error(error)
        }
    }

    async delete(){
        try {

            const { rowsAffected } = await con.query(`delete from img where imgID = ${this.imgID}`)

            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
}