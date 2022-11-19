import Axios  from "axios"
import { getToken, Token } from "./auth"
import { Data } from "./utils"

const port = '3001'

const localhost = `http://localhost:${port}`

export function Config() {
    const config ={
        headers: {
            'content-type': 'multipart/form-data',
        }
    }
    return (config.headers)
  };

const Api = Axios.create({
    baseURL: `${localhost}`
})

export class AxiosCrud{
    async Get(url, info){
        if(info){
            const response = await Api.post(url, info)
            return response
        } else{
            const response = await Api.get(url)
            return response
        }
    }

    async Insert(url,  info, config){
        try {
            if(config){
                const res = await Api.post(url, info, config)
                return res
            }else{
                const res = await Api.post(url, info)
                return res
            }
        } 
        catch (error) 
        {
            console.log(error)    
        }
    }
}


export class AxiosUser{

    async axiosGet(nome){
        
        try {
            
            const user = await new AxiosCrud().Insert('/usuario/getProfile', {userID: nome})
            const usuario = user.data[0]

            const post = await new AxiosCrud().Insert('/post/getFilterUser', {userID: usuario.userID})
            const posts = post.data

            const info = {
                liv: posts,
                user: usuario
            }

            return info
        } 
        catch (error) 
        {
            return error
        }
        

    }
    
    async axiosIns(values, file){
        try {
            if (file == 1){
                Axios.post('http://localhost:3001/usuario/insert',{
                    nome:values.nome,
                    email:values.email,
                    senha:values.senha,
                    fkImg: 1
                }).then(()=>{})
            } else{
                const response = await this.axiosCreateImg(file)
                const imgID = response.data[0].imgID
                console.log(imgID)

                Axios.post('http://localhost:3001/usuario/insert',{
                    nome:values.nome,
                    email:values.email,
                    senha:values.senha,
                    fkImg: imgID
                }).then(()=>{})

            }
            
            

            
        } 
        catch (error) 
        {
            return(error)
        }
        
    }

    async axiosLogin(email, senha) {
        try{
            Axios.post(`${localhost}/usuario/login`, {
                    email: email,
                    senha: senha
                }).then((response) =>{
                    if(response.data.length){
                        if (email == response.data[0].email && senha == response.data[0].senha){
                            localStorage.setItem('UserConnection', JSON.stringify(response.data[0]))
                            window.location.replace('/', {replace: true})
                        } else{
                            AppContext.teste = false
                        }
                    }else{
                        alert('aaaa')
                    }
            })

        }
        catch(error)
        {
           return(error)
        }

    }

    async axiosDel(){
        try {
            Axios.delete(`${localhost}/usuario/delete/${getToken().userID}`).then(()=>{
                localStorage.removeItem(Token)    
                window.location.replace('/', {replace: true})
            })
        }  
        catch (error) 
        {
            return error
        }
    }

    async axiosAlter(inf, image){
        try {

            const formData = new FormData()

            formData.append('file', image)

            formData.append('name', image.name)

            const img = await new AxiosCrud().Insert('/img/insert', formData, Config())
            const newImg = img.data[0].imgID

            const teste = {
                email: inf.email,
                fkImg: newImg,
                insertDate: getToken().insertDate,
                modDate: Data(),
                nome: inf.nome,
                senha: inf.senha,
                statusUser: inf.statusUser,
                userID: getToken().userID
            }
            
            Axios.put(`${localhost}/usuario/update/${getToken().userID}`,{
                statusUser: 1,
                fkImg: newImg,
                email: inf.email,
                nome: inf.nome,
                senha: inf.senha
            }).then(() =>{
                localStorage.removeItem(Token)
                localStorage.setItem(Token, JSON.stringify(teste))
                window.location.replace(`/Perfil/${teste.nome}`)
            })    
        } 
        catch (error) 
        {
            return error
        }
    }

    async axiosCreateImg(fileImg){

        try {
            const formData = new FormData()

            formData.append('file', fileImg)

            formData.append('name', fileImg.name)

            return((Axios.post(`${localhost}/img/insert`, formData, Config())))
        } 
        catch (error) 
        {
            
        }
        
    }

    async axiosCreateLiv(filePdf){
        const formData = new FormData()
        formData.append('file', filePdf)
        formData.append('name', filePdf.name)

        return((Axios.post(`${localhost}/liv/insert`, formData, Config())))
    }

    async axiosInsPost(text, livID){
        return((Axios.post(`${localhost}/post/insert`, {
            nome: text.nome,
            desc: text.desc,
            livID: livID,
            userID: getToken().userID
        })))
    }

    async axiosFKPosImg(postID, imgID){
        return((Axios.post(`${localhost}/FKPosImg/insert`, {
            postID: postID,
            imgID: imgID
        })))
    }

    async axiosFKPosGen(postID, genID){
        return((Axios.post(`${localhost}/FKPosGen/insert`, {
            postID: postID,
            genID: genID
        })))
    } 

    //Deus existe porque o codigo ali embaixo funciona.

    async axiosCreatePost(fileImg, filePDF, text, gen){
        try {
            const getImgID = await this.axiosCreateImg(fileImg)
            const imgID = getImgID.data[0].imgID
            
            const getLivID = await this.axiosCreateLiv(filePDF)
            const livID = getLivID.data[0].livID
                
            const getPostID = await this.axiosInsPost(text, livID)
            const postID = getPostID.data[0].postID

            this.axiosFKPosImg(postID, imgID)

            this.axiosFKPosGen(postID, gen)

            window.location.replace('/')
        } 
        catch (error) 
        {
            return error
        }
        
    }

    static async axiosGetPost(){
         
        
        return(Axios.get(`${localhost}/post/get`))
    }
    
    async axiosGetPostFilter(titulo){
        try {
            return((Axios.post(`${localhost}/post/getFilter`, {nome: titulo})))
        } 
        catch (error) 
        {
            return error
        }
        
    }

    async axiosGetImgUser(userID){
        try {
            return ((Axios.post(`${localhost}/usuario/getImg`, {
                userID: userID
            })))    
        } 
        catch (error) 
        {
            return error
        }
    }

    async axiosDelPost(postID){
        try {
            Axios.put(`${localhost}/post/del/${postID}`).then(()=>{
                window.location.replace('/')
            })
        } 
        catch (error) 
        {
            
        }
    }

    static async axiosCreateCom(text){
        try {
            const res = await AxiosCrud.Insert('/coment/insert', text)
            return res
        } 
        catch (error) 
        {
            console.log(error)
        }
    }

    async axiosLiv(params){
        const liv = await new AxiosCrud().Insert('/post/getFilter', {postID: params})
        const dadosLiv = liv.data[0]

        const img = await new AxiosCrud().Insert('/usuario/getImg', {userID: dadosLiv.userID})
        const imgU = img.data[0]

        const coment = await new AxiosCrud().Insert('/coment/get', {fkPost: dadosLiv.postID})
        const comentarios = coment.data

        const info = {
            liv: dadosLiv,
            userImg: imgU,
            coment: comentarios
        }

        return info
    }

}