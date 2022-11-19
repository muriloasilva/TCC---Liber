import { GenModel } from "../models/genModel.js"

export class GenCtrl{
    
    
    static async GetGen(req, res){
        const response = await GenModel.Get()
        return res.status(200).json(response) 
    }


}