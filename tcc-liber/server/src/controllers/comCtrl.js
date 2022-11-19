import { Comentario } from "../models/fkModels.js"


export class ComentController{
    static async getCom(req, res){
        try {   
                const { textCom, statusCom, fkUser, fkPost } = req.body
                const response = await new Comentario(textCom, statusCom, fkUser, fkPost).getCom()
                return res.status(200).json(response)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        } 
    }

    static async insertCom(req, res){
        try {
                const { textCom, statusCom, fkUser, fkPost } = req.body
                const response = await new Comentario( textCom, statusCom, fkUser, fkPost).insert()
                return res.status(200).json(response)
        } 
        catch (error) 
        {
            console.log(error) 
            return res.status(500).json(error) 
        }
    } 

    static async updateCom(req, res){
        try {
                const { comID } = req.params
                const { textCom, statusCom, fkUser, fkPost } = req.body
                const response = await new Comentario(textCom, statusCom, fkUser, fkPost, comID).update()
                return res.status(200).json(response)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async deleteCom(req, res){
        try {
                const { comID } = req.params
                const { textCom, statusCom, fkUser, fkPost } = req.body
                const response = await new Comentario(textCom, statusCom, fkUser, fkPost, comID).delete()
                return res.status(200).json(response)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }



}