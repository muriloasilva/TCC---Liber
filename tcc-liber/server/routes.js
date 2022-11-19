import express from 'express'
import { UsuarController } from './src/controllers/usuarCtrl.js'
import Multer from 'multer'
import { multerConfig } from './src/utils/multer.js'
import { FilesCtrl } from './src/controllers/filesCtrl.js'
import { GenCtrl } from './src/controllers/genCtrl.js'
import { PostCtrl } from './src/controllers/postCtrl.js'
import { ComentController } from './src/controllers/comCtrl.js'

//as rotas que enviam dados para o controller.

const routes = express.Router()

routes.get('/usuario/get', UsuarController.getUser)
routes.post('/usuario/insert', UsuarController.insertUser)
routes.put('/usuario/update/:userID', UsuarController.updateUser)
routes.delete('/usuario/delete/:userID', UsuarController.deleteUser)
routes.post('/usuario/login', UsuarController.loginUser)
routes.post('/usuario/getProfile', UsuarController.getUserProfile)
routes.post('/usuario/getImg', UsuarController.getUserImg)

routes.post('/img/insert', Multer(multerConfig).single('file'), FilesCtrl.ImgInsert)
routes.get('/img/get', FilesCtrl.GetImg)
routes.delete('/img/del/:imgID', FilesCtrl.deleteImg)
 
routes.get('/gen/get', GenCtrl.GetGen) 

routes.post('/liv/insert', Multer(multerConfig).single('file'), FilesCtrl.LivIns)

routes.post('/post/insert', FilesCtrl.PostIns)

routes.get('/post/get', PostCtrl.getHomePost)
routes.post('/post/getFilter', PostCtrl.getFilterPost)
routes.post('/post/getFilterUser', PostCtrl.getFilterPostUser)
routes.put('/post/del/:postID', PostCtrl.deletePost)

routes.post('/FKPosImg/insert', FilesCtrl.posImg)

routes.post('/FKPosGen/insert', FilesCtrl.posGen)

routes.post('/coment/get', ComentController.getCom)
routes.post('/coment/insert',  ComentController.insertCom)


export { routes } 