import { Usuar } from "../models/usuarModel.js"

/* O controller se liga ao view e a model, não deixando que os dois passem dados diretamente.

mesmo com aqueles IFs da model, foi necessário colocar as variáveis para enviar em todas as operações. Pois elas
precisam ser declaradas e enviadas, mesmo estando Null. Porém, isso é resolvido só dando CTRL C e CTRL V, então
acelera bastante o trabalho.*/

export class UsuarController{
    static async getUser(req, res){
        try {
                const usuarios = await Usuar.get()
                return res.status(200).json(usuarios)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        } 
    }

    static async getUserProfile(req, res){
        try {
                const { email, senha, nome, nomePlum, modDate, fkImg, userID} = req.body
                const usuario = await new Usuar(email, senha, nome, nomePlum, modDate,fkImg, userID).getProfile()
                return res.status(200).json(usuario)
        } 
        catch (error) 
        {
            console.log(error) 
            return res.status(500).json(error)
        }
    }

    static async insertUser(req, res){
        try {
                const { email, senha, nome, nomePlum, statusUser,fkImg } = req.body
                const newUser = await new Usuar( email, senha, nome, nomePlum, statusUser,fkImg).insert()
                return res.status(200).json(newUser)
        } 
        catch (error) 
        {
            console.log(error) 
            return res.status(500).json(error) 
        }
    } 

    static async updateUser(req, res){
        try {
                const { userID } = req.params
                const { email, senha, nome, nomePlum, statusUser, fkImg } = req.body
                const alterUser = await new Usuar(email, senha, nome, nomePlum, statusUser,fkImg, userID).update()
                return res.status(200).json(alterUser)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async deleteUser(req, res){
        try {
                const { userID } = req.params
                const { email, senha, nome, nomePlum, statusUser,fkImg } = req.body
                const delUser = await new Usuar(email, senha, nome, nomePlum, statusUser,fkImg, userID).delete()
                return res.status(200).json(delUser)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async loginUser(req, res){
        try {
            const { email, senha, nome, nomePlum, statusUser,fkImg } = req.body
            const loginUser = await new Usuar(email, senha, nome, nomePlum, statusUser,fkImg).login()
            return res.status(200).json(loginUser)
        } 
        catch (error) {
            console.log('login ' + error)
        }
    }

    static async getUserImg(req, res){
        const { email, senha, nome, nomePlum, statusUser, fkImg, userID} = req.body
        const response = await new Usuar(email, senha, nome, nomePlum, statusUser, fkImg, userID).getImg()
        return res.status(200).json(response)
    }

}