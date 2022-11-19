import { FKPosGen, FKPosImg } from "../models/fkModels.js"
import { ImgModel } from "../models/imgModel.js"
import { LivModel } from "../models/livModel.js"
import { PostModel } from "../models/postModel.js"

export class FilesCtrl{


    static async GetImg(req, res){
        const response = await ImgModel.getImg()
        return res.status(200).json(response) 
    } 

    static async ImgInsert(req, res){
        console.log(req.file)
        const { originalname, location, key } = req.file
        const response = await new ImgModel( originalname, location, key).insert() 
        return res.status(200).json(response)
    } 

    static async LivIns(req, res){
        const { originalname, location, key } = req.file
        const response = await new LivModel(originalname, location, key).insert()
        return res.status(200).json(response) 
    }
 
    static async PostIns(req, res){
        const { nome, desc, livID, userID } = req.body
        const response = await new PostModel(nome, desc, livID,'', userID).insert()
        return res.status(200).json(response) 
    }

    static async posImg(req, res){
        const { postID, imgID } = req.body
        const response = await new FKPosImg(postID, imgID).insert()
        return res.status(200).json(response)
    }   

    static async posGen(req, res){
        const { postID, genID } = req.body
        const response = await new FKPosGen(postID, genID).insert()
        return res.status(200).json(response)
    }   


    static async deleteImg(req, res){
        try {
                const { imgID } = req.params
                const { originalname, path, keyImg } = req.body
                const delImg = await new ImgModel(originalname, path, keyImg, imgID).delete()
                return res.status(200).json(delImg)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

}