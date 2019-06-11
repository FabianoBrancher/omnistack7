const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://fabianobrancher:1Marcela4!@cluster0-6k7x3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// toda requisição que venha depois vão ter acesso ao req.io
// por exemplo, vou poder usar req.io dentro do PostController ou outro controller...
app.use((req, res, next) => {
    req.io = io

    next()
})

// para permitir que todos endereços (urls) de diferentes ips possam acessar este back-end
app.use(cors())

//rota para acessar arquivos estáticos
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

// arquivo de rotas
app.use(require('./routes'))

server.listen(3333)