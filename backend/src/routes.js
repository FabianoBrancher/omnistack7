const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

const routes = new express.Router()
const upload = multer(uploadConfig)
// multer permite que o express entenda esse corpo que a gente envia atraves do insomnia (multi-part form data)

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)

// rota do like
routes.post('/posts/:id/like', LikeController.store)

module.exports = routes;