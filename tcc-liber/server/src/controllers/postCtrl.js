import { PostModel } from "../models/postModel.js";


export class PostCtrl{

    static async getHomePost(req, res){

        try {
            const response = await PostModel.get()
            return res.status(200).json(response)    
        } 
        catch (error) 
        {
            return error
        }

    }

    static async getFilterPost(req, res){

        try {
            const {nome, desc, livID, statusPost,userID, postID } =  req.body
            const response = await new PostModel( nome, desc, livID, statusPost,userID, postID).GetFilter()
            return res.status(200).json(response)    
        } 
        catch (error) 
        {
            return error
        }

    }

    static async getFilterPostUser(req, res){

        try {
            const {nome, desc, livID, statusPost,userID, postID } =  req.body
            const response = await new PostModel(nome, desc, livID, statusPost,userID, postID).GetFilterUser()
            return res.status(200).json(response)    
        } 
        catch (error) 
        {
            return error
        }

    }


    static async deletePost(req, res){
        try {
            const {nome, desc, livID, statusPost,userID} =  req.body
            const { postID } = req.params
            const response = await new PostModel(nome, desc, livID, statusPost, userID, postID).deletePost()
            return res.status(200).json(response)    
        } 
        catch (error) 
        {
            return error
        }

    }

}