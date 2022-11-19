import Multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import aws from 'aws-sdk'
import { __dirname } from './dir.js'
import MulterS3 from 'multer-s3'
import utf8 from 'utf8'

const storageTypes = {
    local: Multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `${__dirname}/../tmp/uploads`)
        },
        filename:(req, file, cb) => {
            crypto.randomBytes(16, (err, hash)=>{
                if(err) cb(err)

                const fileName = `${hash.toString('hex')}-${utf8.decode(file.originalname)}`

                cb(null, fileName)
            }) 
        } 
    }),
    s3: MulterS3({
        s3: new aws.S3(),
        bucket: 'libert',
        contentType: MulterS3.AUTO_CONTENT_TYPE,
        acl:'public-read',
        filename:(req, file, cb) => { 
            crypto.randomBytes(16, (err, hash)=>{
                if(err) cb(err)

                const fileName = `${hash.toString('hex')}-${utf8.decode(file.originalname)}`

                cb(null, fileName)
            })
        },
    })
}

export const multerConfig = {
    dest: path.resolve(__dirname, '..', 'tmp', 'uploads'),
    storage: storageTypes['s3'], 
    limits:{
        fileSize: 100 * 1024 * 1024,
    }, 
    fileFilter:(req, file, cb) =>{
        const allowedMimes =[
            'image/jpeg',
            'image/jpg',
            'image/png',
            'application/pdf'
        ]

        if (allowedMimes.includes(file.mimetype)){
            cb(null, true)
        }else{
            cb(new Error("invalid file type."))
        }
    }
} 