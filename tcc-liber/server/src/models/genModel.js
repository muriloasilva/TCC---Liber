import { poolConnect } from "../../poolConnect.js"

const con = await poolConnect()

export class GenModel{
    constructor(genID){
        if(genID == '' || genID == null || genID == undefined){
            this.genID = ''
        }else{
            this.genID = genID
        }
    }

    static async Get(){
        const { recordset } = await con.query(`select * from gen order by nome asc`)
        return recordset
    }



}